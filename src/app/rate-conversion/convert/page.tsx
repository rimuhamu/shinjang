'use client';
import { GrossPrice } from '@/src/components/GrossPrice';
import { Button } from '@/src/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConvertPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const priceType = searchParams.get('pt');
  const currencyName = searchParams.get('curr')!;
  const priceInString = searchParams.get('price')!;

  const price = Number(priceInString);

  const result = price * 10000 * 12.5;

  if (priceType === 'Kotor') {
    return (
      <GrossPrice
        priceType={priceType}
        currencyName={currencyName}
        result={result}
      />
    );
  }
  return (
    <div className='mx-auto text-center flex flex-col h-[calc(100vh-200px)] items-center justify-center max-w-max gap-3'>
      {}
      {priceType}
      <div className=' text-neutral-500 font-semibold text-lg'>
        No orders found for this customer.
      </div>
      <Button onClick={() => router.push('/')}>Back to Home</Button>
    </div>
  );
}
