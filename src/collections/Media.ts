import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", de: "Titel" },
      required: true,
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
    formatOptions: {
      format: "webp",
    },
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
        formatOptions: {
          format: "webp",
        },
      },
    ],
  },
};

export default Media;
