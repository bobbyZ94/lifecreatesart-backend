import { CollectionConfig } from "payload/types";

const Gallery: CollectionConfig = {
  slug: "gallery",
  versions: {
    drafts: {
      autosave: true,
    },
  },
  labels: {
    singular: { en: "Gallery entry", de: "Gallerie Eintrag" },
    plural: { en: "Gallery", de: "Gallerie" },
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "_status"],
  },
  fields: [
    {
      name: "title",
      label: { en: "Title", de: "Titel" },
      type: "text",
      required: true,
    },
    {
      name: "date",
      label: { en: "Date", de: "Datum" },
      type: "date",
      required: true,
    },
    {
      name: "image",
      label: { en: "Image", de: "Bild" },
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "text",
      type: "textarea",
      label: {
        en: "Gallery entry description",
        de: "Gallery Eintrag Beschreibung",
      },
      required: true,
      maxLength: 200,
    },
  ],
};

export default Gallery;
