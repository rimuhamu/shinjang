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
    router.push(`/orders?name=${name}`);
  };

  return (
    <div className='mx-auto text-center -z-50 flex flex-col h-dvh items-center justify-center max-w-full gap-2 md:gap-3 lg:gap-5'>
      <h1 className='text-6xl md:text-7xl lg:text-8xl text-black font-extrabold tracking-normal italic'>
        Shinjang
      </h1>
      <p className='text-xs md:text-sm lg:text-base text-rose-400'>
        Track your orders easily
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row gap-5'>
          <Input
            {...register('name')}
            placeholder='Input your name'
            className='w-fit md:w-[400px] lg:w-[600px]'
          />

          <Button>
            <Search />
          </Button>
        </div>
      </form>
    </div>
  );
}
