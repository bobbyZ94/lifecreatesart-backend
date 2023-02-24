import { GlobalConfig } from 'payload/types'

const About: GlobalConfig = {
  slug: 'about',
  label: { en: 'About', de: 'Über mich' }, 
  fields: [
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

export default About