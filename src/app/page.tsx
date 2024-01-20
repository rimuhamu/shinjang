'use client';

import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import {
  NameValidator,
  TNameValidator,
} from '@/src/lib/validators/name-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { setCookie } from 'cookies-next';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNameValidator>({
    resolver: zodResolver(NameValidator),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = ({ name }: TNameValidator) => {
    router.push('/orders');
    setCookie('name', name);
  };

  return (
    <div className=' mx-auto text-center flex flex-col h-[calc(100vh-170px)] items-center justify-center max-w-max gap-5'>
      <h1 className='text-6xl text-black font-extrabold tracking-normal sm:text-8xl italic'>
        Shinjang
      </h1>
      <p className='text-base text-rose-400'>Track your orders easily</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row gap-5'>
          <Input
            {...register('name')}
            placeholder='Input your name'
            className='w-[800px]'
          />

          <Button>
            <Search />
          </Button>
        </div>
      </form>
    </div>
  );
}
