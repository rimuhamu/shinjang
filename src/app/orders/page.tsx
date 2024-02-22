import payload from 'payload';
import { ProductClient } from './client';
import { redirect } from 'next/navigation';
import { Heading } from '@/src/components/Heading';
import { Separator } from '@/src/components/ui/separator';

export default async function OrdersPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const customerName = searchParams?.name;

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
  console.log(typeof customerName);
  console.log(result.docs[0]);
  console.log(searchParams);

  const products = result.docs[0].ordered;

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex items-center justify-between'>
          <Heading
            title={`Orders for ${customerName}`}
            description='View all your orders.'
          />
        </div>
        <Separator />
        {/* //! data should be string instead of typeProduct
         @ts-expect-error*/}
        <ProductClient data={products} />
      </div>
    </div>
  );
}
