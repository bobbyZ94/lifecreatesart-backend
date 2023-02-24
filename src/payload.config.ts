import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Articles from './collections/Articles';
import Blog from './collections/Blog';
import Showcase from './collections/Showcase';
import About from './collections/About';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  globals: [
    About
  ],
  collections: [
    Articles,
    Showcase,
    Blog,
    Media,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
