import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <div className='border-b-2 border-rose-600 py-4'>
          <div className='flex items-center'>
            <div className='px-10'>
              <Link href='/'>
                <h1 className='text-black font-bold tracking-normal italic'>
                  Shinjang
                  <span className='text-rose-500'>!</span>
                </h1>
              </Link>
            </div>
            <div className='px-10'>
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
