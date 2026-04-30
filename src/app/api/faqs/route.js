import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

export const dynamic = 'force-dynamic';

// --- DEBUGGER: Find out exactly where Hostinger is running ---
const localEnvPath = path.join(process.cwd(), '.env');
const hostingerVaultPath = path.join(process.cwd(), '../.env');

let debugInfo = {
    currentWorkingDirectory: process.cwd(),
    foundLocalEnv: fs.existsSync(localEnvPath),
    foundVaultEnv: fs.existsSync(hostingerVaultPath),
    loadedPath: 'None'
};

if (debugInfo.foundLocalEnv) {
    dotenv.config({ path: localEnvPath });
    debugInfo.loadedPath = localEnvPath;
} else if (debugInfo.foundVaultEnv) {
    dotenv.config({ path: hostingerVaultPath });
    debugInfo.loadedPath = hostingerVaultPath;
}
// -----------------------------------------------------------

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function initDB() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS site_data (
            id INT PRIMARY KEY,
            faqs JSON
        )
    `);

    const [rows] = await pool.query('SELECT id FROM site_data WHERE id = 1');
    if (rows.length === 0) {
        const defaultData = JSON.stringify({ fans: [], creators: [] });
        await pool.query('INSERT INTO site_data (id, faqs) VALUES (1, ?)', [defaultData]);
    }
}

export async function GET() {
    try {
        await initDB();
        const [rows] = await pool.query('SELECT faqs FROM site_data WHERE id = 1');
        
        let faqData = rows[0].faqs;
        if (typeof faqData === 'string') {
            faqData = JSON.parse(faqData);
        }
        
        return NextResponse.json(faqData);
    } catch (error) {
        console.error("Database GET Error:", error);
        // If it crashes, it will print our debug info to the screen!
        return NextResponse.json({ 
            error: 'Database Connection Failed', 
            details: error.message,
            debug: {
                ...debugInfo,
                dbUserLoaded: process.env.DB_USER ? "Yes" : "No"
            }
        }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        await initDB();
        await pool.query('UPDATE site_data SET faqs = ? WHERE id = 1', [JSON.stringify(data)]);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save', details: error.message }, { status: 500 });
    }
}