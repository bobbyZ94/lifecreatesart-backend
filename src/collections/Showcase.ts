import { CollectionConfig } from 'payload/types'

const Showcase: CollectionConfig = {
  slug: 'showcase',
  versions: {
    drafts: {
      autosave: true,
    }
  },
  labels: { 
    singular: { en: 'Showcase entry', de: 'Showcase Eintrag' }, 
    plural: { en: 'Showcase', de: 'Showcase' } 
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
      required: true,
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
      type: 'textarea',
      label: { en: 'Showcase entry description', de: 'Showcase Eintrag Beschreibung' },
      required: true,
      maxLength: 200,
    },
  ],
}

export default Showcase