'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push('/')}
        alt='Logo'
        className='cursor-pointer'
        height='55'
        width='55'
        src='/logo.png'
      />
    </div>
  );
};
export default Logo;
