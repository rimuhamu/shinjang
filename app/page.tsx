import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className=' mx-auto text-center flex flex-col h-[calc(100vh-50px)] items-center justify-center max-w-max gap-5'>
      <h1 className='text-6xl text-black-600 font-extrabold tracking-normal sm:text-8xl italic'>
        Shinjang
        <span className='text-rose-500'>!</span>
      </h1>
      <p className='text-base text-rose-400'>Track your orders easily</p>
      <div className='flex flex-row gap-5'>
        <Input
          placeholder='Input your phone number'
          className='w-[800px]'
        />
        <Button>
          <Search />
        </Button>
      </div>
    </div>
  );
}
