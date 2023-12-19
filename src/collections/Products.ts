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
    defaultColumns: ['name', 'total', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    // {
    //   name: 'placedBy',
    //   type: 'relationship',
    //   relationTo: 'customers',
    //   required: true,
    // },
  ],
};
