import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET() {
  const latestInvoices = await fetchLatestInvoices();
  return Response.json(latestInvoices);
}
