import express from "express";
import payload from "payload";
import path from "path";
import { mediaManagement } from "payload-cloudinary-plugin";

require("dotenv").config();

const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "../assets")));

app.use(
  mediaManagement(
    {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    {
      folder: process.env.CLOUDINARY_FOLDER,
      format: "webp",
      transformation: {
        crop: "scale",
        width: 1920,
      },
      exif: false,
      allowed_formats: [
        "gif",
        "png",
        "jpg",
        "bmp",
        "ico",
        "pdf",
        "tiff",
        "eps",
        "jpc",
        "jp2",
        "psd",
        "webp",
        "zip",
        "svg",
        "webm",
        "wdp",
        "hpx",
        "djvu",
        "ai",
        "flif",
        "bpg",
        "miff",
        "tga",
      ],
    }
  )
);

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Initialize Payload
const start = async () => {
  payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: `${process.env.MONGOHOST}:${process.env.MONGOPORT}`,
    mongoOptions: {
      user: process.env.MONGOUSER,
      pass: process.env.MONGOPASSWORD,
      dbName: process.env.MONGO_DBNAME,
    },
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(process.env.PORT);
};

start();
