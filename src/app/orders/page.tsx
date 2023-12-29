'use client';

import { getCookie } from 'cookies-next';

export default function OrdersPage() {
  const customerName = getCookie('name');

  return (
    <div>
      <div className='flex flex-col items-start gap-5 self-stretch py-4 px-2'>
        <div className=' text-rose-700 text-3xl font-extrabold '>Orders</div>
        <div className=' text-gray-500 text-xl font-semibold '>
          {customerName}
        </div>
      </div>
    </div>
  );
}
