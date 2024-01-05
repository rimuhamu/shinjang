import { getCookie } from 'cookies-next';
import payload from 'payload';
import { cookies } from 'next/headers';
import { ProductClient } from './client';
import { Product } from '@/payload-types';
import { ProductColumn } from '@/src/app/orders/columns';

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

  const products = result.docs[0].ordered;

  return (
    <div>
      <div className='flex flex-col items-start gap-5 self-stretch py-4 px-2'>
        {/* //! data should be string instead of typeProduct
         @ts-expect-error*/}
        <ProductClient data={products} />
      </div>
    </div>
  );
}
