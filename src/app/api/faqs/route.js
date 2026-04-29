import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/faqs.json');

export async function GET() {
    try {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        return NextResponse.json(JSON.parse(fileData));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read FAQ data' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        // Write the data to the JSON file with nice formatting
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save FAQ data' }, { status: 500 });
    }
}