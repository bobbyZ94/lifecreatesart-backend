import { CollectionConfig } from 'payload/types'
import slugify from 'slugify'

const Blog: CollectionConfig = {
  slug: 'blog',
  versions: {
    drafts: {
      autosave: true,
    }
  },
  labels: { singular: 'Blog', plural: 'Blogs' },
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
      name: 'image',
      label: { en: 'Image', de: 'Bild' },
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
      required: true,
      defaultValue: [
        {
          children: [{ text: '...' }],
        },
      ],
      admin: {
        elements: ['h1', 'h2', 'h3', 'link', 'ol', 'ul', 'indent', 'upload'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
        upload: {
          collections: {
            media: {
              fields: [],
            },
          },
        },
      },
    }
  ],
}

export default Blog