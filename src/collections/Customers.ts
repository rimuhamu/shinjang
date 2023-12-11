import { CollectionConfig } from 'payload/types';

export const Customers: CollectionConfig = {
  slug: 'customers',
  //   access: {
  //     delete: () => false,
  //     read: () => true,
  //   },
  // admin: {
  //   useAsTitle: 'title',
  // },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      hasMany: true,
      name: 'ordered',
      type: 'relationship',
      relationTo: 'orders',
      required: true,
    },
  ],
};
