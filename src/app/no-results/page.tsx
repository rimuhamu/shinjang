'use client';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NoResultsPage() {
  const router = useRouter();
  return (
    <div className='mx-auto text-center flex flex-col h-[calc(100vh-200px)] items-center justify-center max-w-max gap-3'>
      <Image
        src='/not-found.png'
        alt='not-found'
        width={500}
        height={500}
      />
      <div className=' text-neutral-500 font-semibold text-lg'>
        No orders found for this customer.
      </div>
      <Button onClick={() => router.push('/')}>Back to Home</Button>
    </div>
  );
}
