import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// THIS LINE FIXES THE CACHING BUG: It forces Next.js to always read fresh from the database!
export const dynamic = 'force-dynamic';

// Connect to your Hostinger MySQL Database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper function to ensure the table exists
async function initDB() {
    // Create a simple table that holds a single row containing your entire JSON object
    await pool.query(`
        CREATE TABLE IF NOT EXISTS site_data (
            id INT PRIMARY KEY,
            faqs JSON
        )
    `);

    // Check if the row exists yet
    const [rows] = await pool.query('SELECT id FROM site_data WHERE id = 1');
    if (rows.length === 0) {
        // If not, insert a blank template so it's never empty
        const defaultData = JSON.stringify({ fans: [], creators: [] });
        await pool.query('INSERT INTO site_data (id, faqs) VALUES (1, ?)', [defaultData]);
    }
}

export async function GET() {
    try {
        await initDB();
        const [rows] = await pool.query('SELECT faqs FROM site_data WHERE id = 1');
        
        // Parse the JSON data from the database and send it to the frontend
        let faqData = rows[0].faqs;
        if (typeof faqData === 'string') {
            faqData = JSON.parse(faqData);
        }
        
        return NextResponse.json(faqData);
    } catch (error) {
        console.error("Database GET Error:", error);
        return NextResponse.json({ error: 'Failed to read from database' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        await initDB();
        
        // Update the single row with your new FAQ data
        await pool.query('UPDATE site_data SET faqs = ? WHERE id = 1', [JSON.stringify(data)]);
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Database POST Error:", error);
        return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    }
}