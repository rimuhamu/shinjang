import { getCookie } from 'cookies-next';
import payload from 'payload';
import { cookies } from 'next/headers';

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

  console.log('nama customer', customerName);
  console.log(result.docs[0].ordered);

  return (
    <div>
      <div className='flex flex-col items-start gap-5 self-stretch py-4 px-2'>
        <div className=' text-rose-700 text-3xl font-extrabold '>Orders</div>
        <div className=' text-gray-500 text-xl font-semibold '></div>
      </div>
    </div>
  );
}
