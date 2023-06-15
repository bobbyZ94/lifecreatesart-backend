import type { Block } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'

export const Gallery: Block = {
  slug: 'gallery',
  fields: [
    backgroundColor({}),
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: "image",
          label: { en: "Image", de: "Bild" },
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ]
    },
  ],
}
