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

  const multFactor = 10000;
  const fee = 25000;
  const posFee = 1800;
  const bantaekFee = 13000;
  const kurirMinFee = 4000;
  const kurirMaxFee = 5000;

  const grossResult = price * multFactor * rate;
  const semiregistResult = (price * multFactor + posFee) * rate + fee;
  const posResult = semiregistResult;
  const bantaekResult = semiregistResult + bantaekFee;
  const kurirMinResult = (price * multFactor + kurirMinFee) * rate + fee;
  const kurirMaxResult = (price * multFactor + kurirMaxFee) * rate + fee;

  if (priceType === 'Kotor') {
    return (
      <div className='flex flex-col items-center'>
        <GrossPrice
          priceType={priceType}
          currencyName={currencyName}
          result={grossResult}
        />
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }

  if (priceType === 'Bersih') {
    return (
      <div className='flex flex-col items-center'>
        <NetPrice
          priceType={priceType}
          currencyName={currencyName}
          semiregistResult={semiregistResult}
          posResult={posResult}
          bantaekResult={bantaekResult}
          kurirMinResult={kurirMinResult}
          kurirMaxResult={kurirMaxResult}
        />
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }
}
