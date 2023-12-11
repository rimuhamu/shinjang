import { CollectionConfig } from 'payload/types';

export const Orders: CollectionConfig = {
  slug: 'orders',
  // access: {
  //   read: () => true,
  //   create: () => true,
  //   delete: () => true,
  //   update: () => true,
  // },
  fields: [
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    {
      name: 'placedBy',
      type: 'relationship',
      relationTo: 'customers',
      required: true,
    },
  ],
};
