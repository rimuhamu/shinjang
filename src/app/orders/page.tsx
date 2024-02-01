import { getCookie } from 'cookies-next';
import payload from 'payload';
import { cookies } from 'next/headers';
import { ProductClient } from './client';
import { redirect } from 'next/navigation';

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

  if (result.docs.length === 0) {
    redirect('/no-results');
  }

  console.log('customer name', customerName);
  console.log(result.docs[0].ordered);
  //console.log(result);

  const products = result.docs[0].ordered;

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        {/* //! data should be string instead of typeProduct
         @ts-expect-error*/}
        <ProductClient data={products} />
      </div>
    </div>
  );
}
