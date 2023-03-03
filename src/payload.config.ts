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
import Logo from "./components/Logo";
import Icon from "./components/Icon";

export default buildConfig({
  serverURL: `${process.env.PAYLOAD_PUBLIC_HOST}:${process.env.PAYLOAD_PUBLIC_PORT}`,
  admin: {
    user: Users.slug,
    meta: {
      // browsertab name suffix
      titleSuffix: " - Lifecreatesart",
      // favicon for browsertab
      favicon: "/assets/logo.jpg",
      // image that appears in previews of shared links through admin panel/social media
      ogImage: "/assets/logo.jpg",
    },
    components: {
      graphics: {
        // image component to be displayed as the logo on the Sign Up / Login view.
        Logo,
        // image component displayed above the Nav in the admin panel, often a condensed version of a full logo.
        Icon,
      },
    },
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
  csrf: [
    "https://lifecreatesart-backend-production.up.railway.app",
    "http://localhost",
  ],
  cors: [
    "https://lifecreatesart-backend-production.up.railway.app",
    "http://localhost",
  ],
  globals: [About, Settings, Legal],
  collections: [Articles, Showcase, Blog, Media, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
