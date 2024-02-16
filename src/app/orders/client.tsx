'use client';

import { DataTable } from './data-table';

import { ProductColumn, columns } from '@/src/app/orders/columns';

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient = ({ data }: ProductClientProps) => {
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        searchKey='batchNumber'
      />
    </>
  );
};
