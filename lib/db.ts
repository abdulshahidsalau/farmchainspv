import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

// Initialize the Vercel Postgres client
export const db = drizzle(sql);

// Export the sql client for raw queries if needed
export { sql };