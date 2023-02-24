import { GlobalConfig } from 'payload/types'

const Legal: GlobalConfig = {
  slug: 'legal',
  label: { en: 'Legal', de: 'Datenschutz' },
  fields: [
    {
      name: 'title',
      label: { en: 'Title', de: 'Titel' },
      type: 'text',
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
        elements: ['h1', 'h2', 'h3', 'link', 'ol', 'ul', 'indent'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough'],
      },
    }
  ],
}

export default Legal
