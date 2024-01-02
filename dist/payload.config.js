"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var config_1 = require("payload/config");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var Products_1 = require("./collections/Products");
var Users_1 = require("./collections/Users");
var Customers_1 = require("./collections/Customers");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users_1.Users, Customers_1.Customers, Products_1.Products],
    routes: {
        admin: '/admin',
    },
    admin: {
        user: 'users',
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        // meta: {
        //   titleSuffix: '- Shinjang',
        //   favicon: '/favicon.ico',
        //   ogImage: '/thumbnail.jpg',
        // },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, '../payload-types.ts'),
    },
});
