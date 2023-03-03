import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Articles from "./collections/Articles";
import Blog from "./collections/Blog";
import Showcase from "./collections/Showcase";
import About from "./collections/About";
import Settings from "./collections/Settings";
import Legal from "./collections/Legal";

export default buildConfig({
  ...(process.env.ENVIRONMENT === "development"
    ? { serverURL: "http://localhost:3000" }
    : {
        serverURL: "https://lifecreatesart-backend-production.up.railway.app",
      }),
  admin: {
    user: Users.slug,
  },
  telemetry: false,
  upload: {
    limits: {
      fileSize: 20000000, // 20MB, written in bytes
    },
  },
  rateLimit: {
    window: 9000,
    max: 500,
    trustProxy: true,
  },
  maxDepth: 20,
  csrf: ["https://lifecreatesart-backend-production.up.railway.app"],
  cors: ["https://lifecreatesart-backend-production.up.railway.app"],
  globals: [About, Settings, Legal],
  collections: [Articles, Showcase, Blog, Media, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
