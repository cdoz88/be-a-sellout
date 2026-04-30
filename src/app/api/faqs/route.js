import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export const dynamic = 'force-dynamic';

// HARDCODED TEST: Bypassing the .env file entirely
const pool = mysql.createPool({
    host: '127.0.0.1', // Usually 'localhost' or '127.0.0.1' on Hostinger
    user: 'u577181692_sellout', // EXACT user from Hostinger panel
    password: 'duhtw4$I4KB*ZxBi@bKVjw', // EXACT password
    database: 'u577181692_faqs_db', // EXACT database name from Hostinger panel
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
        return NextResponse.json({ 
            error: 'Failed to read from database', 
            details: error.message 
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
        console.error("Database POST Error:", error);
        return NextResponse.json({ 
            error: 'Failed to save to database', 
            details: error.message 
        }, { status: 500 });
    }
}