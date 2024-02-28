import { formatPrice } from '../lib/utils';

interface NetPriceProps {
  priceType: string;
  currencyName: string;
  semiregistResult: number;
  posResult: number;
  bantaekResult: number;
  kurirMinResult: number;
  kurirMaxResult: number;
}

export const NetPrice = ({
  priceType,
  currencyName,
  semiregistResult,
  posResult,
  bantaekResult,
  kurirMinResult,
  kurirMaxResult,
}: NetPriceProps) => {
  const formattedSemiregistResult = formatPrice(semiregistResult);
  const formattedPosResult = formatPrice(posResult);
  const formattedBantaekResult = formatPrice(bantaekResult);
  const formattedKurirMinResult = formatPrice(kurirMinResult);
  const formattedKurirMaxResult = formatPrice(kurirMaxResult);
  return (
    <div className='flex flex-col flex-1 py-5 px-5 container items-center gap-4'>
      <p className='font-bold text-base mt-5'>
        Harga {priceType} {currencyName}
      </p>
      <p className='text-sm'>(include shipping, admin & fee warehouse)</p>

      <div className='border flex flex-col items-center py-2 gap-2 rounded-lg h-20 w-[200px] border-red-500 bg-red-200 '>
        <p className='text-sm font-semibold'>semi regist</p>
        <p className='font-bold'>{formattedSemiregistResult}</p>
      </div>
      <div className='border flex flex-col items-center py-2 gap-2 rounded-lg h-20 w-[200px] border-red-500 bg-red-200 '>
        <p className='text-sm font-semibold'>pos</p>
        <p className='font-bold'>{formattedPosResult}</p>
      </div>
      <div className='border flex flex-col items-center py-2 gap-2 rounded-lg h-20 w-[200px] border-red-500 bg-red-200 '>
        <p className='text-sm font-semibold'>bantaek/kitaek</p>
        <p className='font-bold'>{formattedBantaekResult}</p>
      </div>
      <div className='border flex flex-col items-center py-2 gap-2 rounded-lg h-20 w-[200px] border-red-500 bg-red-200 '>
        <p className='text-sm font-semibold'>kurir</p>
        <p className='font-bold'>
          {formattedKurirMinResult} - {formattedKurirMaxResult}
        </p>
      </div>
    </div>
  );
};
