'use client';

import { ColumnDef } from '@tanstack/react-table';

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  batchNumber: number;
  country: 'Korea' | 'China' | 'Japan';
  status:
    | 'Ordered to Seller'
    | 'In Progress'
    | 'Arrived WH LN'
    | 'OTW INA'
    | 'Arrived WH INA'
    | 'Arrived Admin';
  isPaid: boolean;
  taxPayment?: number | null;
  notes?: string | null;
  updatedAt: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'batchNumber',
    header: 'Batch Number',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'isPaid',
    header: 'Paid',
  },
  {
    accessorKey: 'taxPayment',
    header: 'Tax Payment',
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
  },
];
