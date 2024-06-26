'use client';

import { ToggleGroup, ToggleGroupItem } from '@/src/components/ui/toggle-group';
import { Input } from '@/src/components/ui/input';
import { useEffect, useState } from 'react';
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
import { usePathname, useRouter } from 'next/navigation';

export default function RateConversionPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [priceType, setPriceType] = useState('');
  const [currencyName, setCurrencyName] = useState('');
  const [isKR, setIsKR] = useState(false);

  useEffect(() => {
    if (currencyName === 'KR') {
      setIsKR(true);
    } else {
      setIsKR(false);
    }
  }, [currencyName]);

  const form = useForm<TPriceValidator>({
    resolver: zodResolver(PriceValidator),
  });

  function onSubmit(values: TPriceValidator) {
    console.log(
      `${typeof values.price} ${typeof values.price} ${currencyName}`
    );
    router.push(
      `${pathname}/convert?pt=${priceType}&curr=${currencyName}&price=${values.price}`
    );
  }

  return (
    <div className='py-32 px-5 container'>
      <div className='flex flex-col gap-3 items-center'>
        <p className='text-balance font-bold text-xl text-center'>
          Price Exchange Rate
        </p>

        {/** FORM */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5'>
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
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan nominal, contoh: 0.5
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** //TODO: put ToggleGroup in FormControl
             *
             */}
            <ToggleGroup
              type='single'
              variant='outline'
              onValueChange={(value) => setCurrencyName(value)}>
              <ToggleGroupItem value='KR'>
                <p>KR</p>
              </ToggleGroupItem>
              <ToggleGroupItem value='JP'>
                <p>JP</p>
              </ToggleGroupItem>
              <ToggleGroupItem value='CH'>
                <p>CH</p>
              </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup
              type='single'
              variant='outline'
              onValueChange={(value) => setPriceType(value)}>
              {isKR && (
                <ToggleGroupItem value='Kotor'>
                  <p>Kotor</p>
                </ToggleGroupItem>
              )}
              <ToggleGroupItem value='Bersih'>
                <p>Bersih</p>
              </ToggleGroupItem>
            </ToggleGroup>
            <Button
              type='submit'
              className='w-full'>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
