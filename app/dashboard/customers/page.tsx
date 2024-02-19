import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');

  return (
    <div className="w-full">
      <Table customers={customers} />
    </div>
  );
}
