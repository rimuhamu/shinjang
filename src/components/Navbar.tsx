import Link from 'next/link';
import Logo from './Logo';

export const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-auto'>
      <header className='relative bg-white'>
        <div className='border-b-2 border-rose-600 py-1'>
          <div className='flex items-center'>
            <div className='pl-10 pr-5 py-1'>
              <Logo />
            </div>
            <div className='px-5'>
              <Link href='/tnc'>
                <h1 className='text-black font-bold tracking-tight  hover:text-rose-400 transition'>
                  Terms and Conditions
                </h1>
              </Link>
            </div>
            <Link href='/payment'>
              <h1 className='text-black font-bold tracking-tight  hover:text-rose-400 transition'>
                Payment
              </h1>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
