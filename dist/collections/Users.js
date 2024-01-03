"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: 'users',
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    auth: true,
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        },
    ],
};
