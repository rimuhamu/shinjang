'use client';
import { GrossPrice } from '@/src/components/GrossPrice';
import { NetPrice } from '@/src/components/NetPrice';
import { Button } from '@/src/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConvertPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isKR, setIsKR] = useState(false);

  const priceType = searchParams.get('pt');
  const currencyName = searchParams.get('curr')!;
  const priceInString = searchParams.get('price')!;

  if (currencyName === 'KR') {
    setIsKR(true);
  }

  const price = Number(priceInString);

  const posFee = 1800;
  const bantaekFee = 13000;
  const kurirMinFee = 4000;
  const kurirMaxFee = 5000;

  let rate: number = 0;
  let fee: number = 0;
  let multFactor: number = 1;

  switch (currencyName) {
    case 'KR':
      rate = 12.5;
      fee = 25000;
      multFactor = 10000;
      break;
    case 'JP':
      rate = 125;
      fee = 25000;
      break;
    case 'CH':
      rate = 2350;
      fee = 20000;
      break;
  }

  const grossResult = price * multFactor * rate;
  const nettoResult = price * multFactor * rate + fee;
  const semiregistResult = (price * multFactor + posFee) * rate + fee;
  const posResult = semiregistResult;
  const bantaekResult = semiregistResult + bantaekFee;
  const kurirMinResult = (price * multFactor + kurirMinFee) * rate + fee;
  const kurirMaxResult = (price * multFactor + kurirMaxFee) * rate + fee;

  if (priceType === 'Kotor') {
    return (
      <div className='flex flex-col items-center pt-20'>
        <GrossPrice
          priceType={priceType}
          currencyName={currencyName}
          result={grossResult}
        />
        <Button onClick={() => router.push('/rate-conversion')}>
          Re-Calculate
        </Button>
      </div>
    );
  }

  if (priceType === 'Bersih') {
    return (
      <div className='flex flex-col items-center pt-20'>
        <NetPrice
          isKR={isKR}
          priceType={priceType}
          currencyName={currencyName}
          nettoResult={nettoResult}
          semiregistResult={semiregistResult}
          posResult={posResult}
          bantaekResult={bantaekResult}
          kurirMinResult={kurirMinResult}
          kurirMaxResult={kurirMaxResult}
        />
        <Button onClick={() => router.push('/rate-conversion')}>
          Re-Calculate
        </Button>
      </div>
    );
  }
}
