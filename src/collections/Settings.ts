import { GlobalConfig } from "payload/types";
import { DescriptionSettingsContactInformation, DescriptionSettingsMetadata } from "../components/Description";

const Settings: GlobalConfig = {
  slug: "settings",
  label: { en: 'Settings', de: 'Einstellungen' },
  fields: [
    {
      type: 'ui',
      name: 'description',
      admin: {
        components: {
          Field: DescriptionSettingsContactInformation,
        },
      },
    },
    {
      name: 'owner',
      label: { en: 'Name of Owner', de: 'Name des Website Besitzers' },
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      label: { en: 'Name of Company. Optional', de: 'Name der Firma. Optional'},
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
      label: { en: 'City number(PLZ) and City', de: 'PLZ und Stadt'},
      required: true,
    },
    {
      name: 'street',
      type: 'text',
      label: { en: 'Street and house number', de: 'Straße und Hausnummer' },
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail',
      required: true,
    },
    {
      name: 'mobile',
      type: 'text',
      label: { en: 'Mobilephone number. Optional', de: 'Handynummer. Optional'},
    },
    {
      name: 'phone',
      type: 'text',
      label: { en: 'Telephone number. Optional', de: 'Telefonnummer. Optional'},
    },
    {
      name: 'tax',
      type: 'text',
      label: { en: 'Tax number. Optional', de: 'Steuernummer. Optional'},
    },
    {
      type: 'ui',
      name: 'description',
      admin: {
        components: {
          Field: DescriptionSettingsMetadata,
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      label: { en: 'Title of website', de: 'Titel der Website'},
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: { en: 'Short description of website', de: 'Kurze Beschreibung des Websiteinhalts'},
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: { en: 'Author of website', de: 'Autor der Website'},
      required: true,
    },
    {
      name: 'keywords',
      type: 'text',
      label: { 
        en: 'List of keywords for SEO. Seperate keywords with comma. E.g.: title, wedothis, wedothat',
        de: 'Liste von Stichwörtern für Suchmaschinenoptimierung. Trenne die Stichwörter mit Kommas, z.B.: Titel, Wirmachendas, Wirkönnendies'
      },
      required: true,
    },
    {
      name: 'web',
      type: 'text',
      label: { en: 'Internet adress of website as URL, e.g.: "www.website-name.com"', de: 'Internetadresse der Website als URL, z.B.: "www.website-name.com"'},
      required: true,
    },
  ],
};

export default Settings;