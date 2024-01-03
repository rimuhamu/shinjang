"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
exports.Customers = {
    slug: 'customers',
    //   access: {
    //     delete: () => false,
    //     read: () => true,
    //   },
    // admin: {
    //   useAsTitle: 'title',
    // },
    admin: {
        useAsTitle: 'name',
    },
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
            relationTo: 'products',
            required: true,
        },
    ],
};
