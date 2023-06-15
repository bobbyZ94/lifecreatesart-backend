import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import stripePlugin from '@payloadcms/plugin-stripe'
import path from 'path'
import { buildConfig } from 'payload/config'

import Logo from './components/Logo'
import Icon from './components/Icon'

import Categories from './collections/Categories'
import { Media } from './collections/Media'
import Orders from './collections/Orders'
import { Pages } from './collections/Pages'
import Products from './collections/Products'
import Users from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { checkout } from './routes/checkout'
import { invoiceCreatedOrUpdated } from './stripe/webhooks/invoiceCreatedOrUpdated'
import { priceUpdated } from './stripe/webhooks/priceUpdated'
import { productUpdated } from './stripe/webhooks/productUpdated'

const generateTitle: GenerateTitle = () => {
  return 'Lifecreatesart'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

export default buildConfig({
  telemetry: false,
  upload: {
    limits: {
      fileSize: 20000000, // 20MB, written in bytes
    },
  },
  rateLimit: {
    window: 9000,
    max: 500,
    trustProxy: true,
  },
  maxDepth: 20,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " - Lifecreatesart",
      favicon: "/assets/logo.jpg",
      ogImage: "/assets/logo.jpg",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          [path.resolve(__dirname, 'collections/Products/hooks/beforeChange')]: mockModulePath,
          [path.resolve(__dirname, 'collections/Users/hooks/createStripeCustomer')]: mockModulePath,
          [path.resolve(__dirname, 'routes/checkout')]: mockModulePath,
          stripe: mockModulePath,
          express: mockModulePath,
        },
      },
    }),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Users, Products, Categories, Orders, Pages, Media],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ['https://checkout.stripe.com', process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
  csrf: ['https://checkout.stripe.com', process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
  endpoints: [
    {
      path: '/checkout',
      method: 'post',
      handler: checkout,
    },
  ],
  plugins: [
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      isTestKey: Boolean(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY),
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
      webhooks: {
        'invoice.created': invoiceCreatedOrUpdated,
        'invoice.updated': invoiceCreatedOrUpdated,
        'product.created': productUpdated,
        'product.updated': productUpdated,
        'price.updated': priceUpdated,
      },
    }),
    nestedDocs({
      collections: ['categories'],
    }),
    seo({
      collections: ['pages', 'products'],
      generateTitle,
      uploadsCollection: 'media',
    }),
  ],
})
