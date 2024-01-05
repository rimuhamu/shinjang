import { getCookie } from 'cookies-next';
import payload from 'payload';
import { cookies } from 'next/headers';
import { DataTable } from './data-table';
import { columns } from './columns';

export default async function OrdersPage() {
  const customerName = getCookie('name', { cookies });

  const result = await payload.find({
    collection: 'customers',
    where: {
      name: {
        equals: customerName,
      },
    },
  });

  console.log('customer name', customerName);
  console.log(result.docs[0].ordered);

  const orderData = result.docs[0].ordered;

  return (
    <div>
      <div className='flex flex-col items-start gap-5 self-stretch py-4 px-2'>
        <div className=' text-rose-700 text-3xl font-extrabold '>Orders</div>
        <DataTable
          columns={columns}
          data={orderData}
        />
      </div>
    </div>
  );
}
