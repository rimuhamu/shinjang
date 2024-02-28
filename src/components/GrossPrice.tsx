import { formatPrice } from '../lib/utils';

interface GrossPriceProps {
  priceType: string;
  currencyName: string;
  result: number;
}

export const GrossPrice = ({
  priceType,
  currencyName,
  result,
}: GrossPriceProps) => {
  const formattedResult = formatPrice(result);
  return (
    <div className='flex flex-col flex-1 py-5 px-5 container items-center gap-4'>
      <p className='font-bold text-base mt-5'>
        Harga {priceType} {currencyName}
      </p>
      <p className='text-sm'>(exclude shipping, admin & fee warehouse)</p>

      <div className='border rounded-lg h-20 w-[200px] border-red-500 bg-red-200 '>
        <p className='text-center py-7 font-bold'>{formattedResult}</p>
      </div>
    </div>
  );
};
