import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { buildConfig } from 'payload/config';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import dotenv from 'dotenv';
import { Orders } from './collections/Orders';
import { Users } from './collections/Users';
import { Customers } from './collections/Customers';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Users, Customers, Orders],
  routes: {
    admin: '/admin',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    // meta: {
    //   titleSuffix: '- Shinjang',
    //   favicon: '/favicon.ico',
    //   ogImage: '/thumbnail.jpg',
    // },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
