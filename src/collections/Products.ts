import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
  slug: 'products',
  // access: {
  //   read: () => true,
  //   create: () => true,
  //   delete: () => true,
  //   update: () => true,
  // },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'batchNumber', 'country', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'batchNumber',
      label: 'Batch Number',
      type: 'number',
      required: true,
    },
    {
      name: 'country',
      type: 'select',
      options: [
        {
          label: 'KR',
          value: 'Korea',
        },
        {
          label: 'CH',
          value: 'China',
        },
        {
          label: 'JP',
          value: 'Japan',
        },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Ordered to Seller',
          value: 'Ordered to Seller',
        },
        {
          label: 'In Progress',
          value: 'In Progress',
        },
        {
          label: 'Arrived WH LN',
          value: 'Arrived WH LN',
        },
        {
          label: 'OTW INA',
          value: 'OTW INA',
        },
        {
          label: 'Arrived WH INA',
          value: 'Arrived WH INA',
        },
        {
          label: 'Arrived Admin',
          value: 'Arrived Admin',
        },
      ],
      required: true,
    },
    {
      name: 'isPaid',
      label: 'Paid',
      type: 'checkbox',
    },
    {
      name: 'taxPayment',
      label: 'Tax Payment',
      type: 'number',
    },
  ],
};
