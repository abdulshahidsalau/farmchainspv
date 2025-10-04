import { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Example query using Drizzle ORM with Vercel Postgres
    const result = await db.select().from(/* your table */);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: 'Error connecting to the database' });
  }
}