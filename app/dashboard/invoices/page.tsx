import { fetchRevenue } from "@/app/lib/data";
export default async function InvoicesPage() {
  const revenue = await fetchRevenue();
  return <p>Invoices Page</p>;
}
