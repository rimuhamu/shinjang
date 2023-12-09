'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  PhoneNumberValidator,
  TPhoneNumberValidator,
} from '@/lib/validators/phone-number-validator';
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
  } = useForm<TPhoneNumberValidator>({
    resolver: zodResolver(PhoneNumberValidator),
    defaultValues: {
      phoneNumber: '',
    },
  });

  const onSubmit = ({ phoneNumber }: TPhoneNumberValidator) => {
    router.push('/orders');
    console.log(phoneNumber);
  };

  return (
    <div className=' mx-auto text-center flex flex-col h-[calc(100vh-170px)] items-center justify-center max-w-max gap-5'>
      <h1 className='text-6xl text-black font-extrabold tracking-normal sm:text-8xl italic'>
        Shinjang
        <span className='text-rose-500'>!</span>
      </h1>
      <p className='text-base text-rose-400'>Track your orders easily</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row gap-5'>
          <Input
            {...register('phoneNumber')}
            placeholder='Input your phone number'
            className='w-[800px]'
          />

          <Button type='submit'>
            <Search />
          </Button>
        </div>
      </form>
    </div>
  );
}
