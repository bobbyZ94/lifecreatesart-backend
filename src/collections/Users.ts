import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  labels: { 
    singular: { en: 'User', de: 'Benutzer' }, 
    plural: { en: 'Users', de: 'Benutzer' },
  },
  auth: {
    maxLoginAttempts: 10,
    // login lockout time in milliseconds set to 1h
    lockTime: 3600000,
    useAPIKey: true,
    cookies: {
      secure: true,
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;