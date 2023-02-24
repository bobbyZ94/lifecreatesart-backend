import { CollectionConfig } from 'payload/types'
import slugify from 'slugify'

const Articles: CollectionConfig = {
  slug: 'articles',
  versions: {
    drafts: {
      autosave: true,
    }
  },
  labels: { 
    singular: { en: 'Article', de: 'Artikel' }, 
    plural: { en: 'Articles', de: 'Artikel' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', '_status'],
  },
  fields: [
    {
      name: 'title',
      label: { en: 'Title', de: 'Titel' },
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [(args) => slugify(args.siblingData.title ? args.siblingData.title : '', { lower: true, remove: /[*+~.()'"!:@]/g })],
      },
    },
    {
      name: 'date',
      label: { en: 'Date', de: 'Datum' },
      type: 'date',
      required: true,
    },
    {
      name: 'quantity',
      label: { en: 'Item quantity in inventory', de: 'Artikelmenge auf Lager'},
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      label: { en: 'Price of single item in Eurocent. E.g.: 10,99€ = 1099', de: 'Preis des einzelnen Artikels in Eurocent. Z.B.: 10,99€ = 1099'},
      type: 'number',
      required: true,
    },
    {
      name: 'images',
      labels: {
        singular: { en: 'Image', de: 'Bild'},
        plural: { en: 'Images', de: 'Bilder' }
      },
      type: 'array',
      fields: [
        {
          name: 'image',
          label: { en: 'Image', de: 'Bild' },
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'text',
      type: 'textarea',
      label: { en: 'Article description', de: 'Artikel Beschreibung' },
      maxLength: 700,
      required: true,
    },
  ],
}

export default Articles