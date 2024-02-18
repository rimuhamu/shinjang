'use client';

import { ToggleGroup, ToggleGroupItem } from '@/src/components/ui/toggle-group';
import { Input } from '@/src/components/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  PriceValidator,
  TPriceValidator,
} from '@/src/lib/validators/price-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form';
import { Button } from '@/src/components/ui/button';

export default function RateConversionPage() {
  const [priceType, setPriceType] = useState('');
  const [productOrigin, setProductOrigin] = useState('');
  const [priceInput, setPriceInput] = useState<Number>();

  const form = useForm<TPriceValidator>({
    resolver: zodResolver(PriceValidator),
  });

  function onSubmit(values: TPriceValidator) {
    console.log(values);
  }

  return (
    <div className='py-5 container'>
      <div className='flex flex-col gap-4 items-center'>
        <p className='text-balance font-bold text-sm text-center'>
          Price Exchange Rate
        </p>
        <ToggleGroup
          type='single'
          variant='outline'
          onValueChange={(value) => setPriceType(value)}>
          <ToggleGroupItem value='krw'>
            <p>KRW</p>
          </ToggleGroupItem>
          <ToggleGroupItem value='jpy'>
            <p>JPY</p>
          </ToggleGroupItem>
          <ToggleGroupItem value='cny'>
            <p>CNY</p>
          </ToggleGroupItem>
        </ToggleGroup>
        {/** FORM */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8'>
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...form.register('price', { valueAsNumber: true })}
                      type='number'
                      step='any'
                      placeholder='0.5'
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan nominal, contoh: 0.5
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
        <p className='text-balance font-bold text-sm'>
          Harga Kotor KR (exclude shipping, admin & fee warehouse)
        </p>
        <div className='border rounded-lg h-20 w-1/2 border-red-500 bg-red-200 '>
          <p className='text-center py-7 font-semibold'>65.000</p>
        </div>
      </div>
    </div>
  );
}
