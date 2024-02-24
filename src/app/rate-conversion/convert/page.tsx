'use client';
import { GrossPrice } from '@/src/components/GrossPrice';
import { NetPrice } from '@/src/components/NetPrice';
import { Button } from '@/src/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConvertPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const priceType = searchParams.get('pt');
  const currencyName = searchParams.get('curr')!;
  const priceInString = searchParams.get('price')!;

  const price = Number(priceInString);

  let rate: number = 0;

  switch (currencyName) {
    case 'KR':
      rate = 12.5;
      break;
    case 'JP':
      rate = 1;
      break;
    case 'US':
      rate = 10;
      break;
    case 'CH':
      rate = 1;
      break;
  }

  const grossResult = price * 10000 * rate;
  const semiregistResult = (price * 10000 + 1800) * rate + 25000;
  const posResult = semiregistResult + 13000;
  const bantaekResult = price * 10000 * rate;
  const kurirResult = price * 10000 * rate;

  if (priceType === 'Kotor') {
    return (
      <>
        <GrossPrice
          priceType={priceType}
          currencyName={currencyName}
          result={grossResult}
        />
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </>
    );
  }

  if (priceType === 'Bersih') {
    return (
      <>
        <NetPrice
          priceType={priceType}
          currencyName={currencyName}
          result={semiregistResult}
        />
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </>
    );
  }
}
