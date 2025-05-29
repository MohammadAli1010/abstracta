import { getDbConnection } from "@/lib/db";

export async function getSummaryById(id: string) {
    try {
        const sql = await getDbConnection();

        const [summary] = await sql`SELECT * FROM pdf_summaries where id=${id}`;

        return summary;
    } catch (err) {
        console.error('Error fetching summary by id', err);
        return null;
    }
}