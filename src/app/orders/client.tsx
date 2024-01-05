'use client';

import { Heading } from '@/src/components/Heading';

import { Separator } from '@/src/components/ui/separator';

import { DataTable } from './data-table';
import { Product } from '@/payload-types';

import { ProductColumn, columns } from '@/src/app/orders/columns';

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient = ({ data }: ProductClientProps) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Orders`}
          description='View all your orders.'
        />
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey='batchNumber'
      />
    </>
  );
};
