import express from 'express'
import payload from 'payload'
import path from "path";

require('dotenv').config()

const app = express()

// Enable assets folder
app.use("/assets", express.static(path.resolve(__dirname, "../assets")));

// A middleware with no mount path; gets executed for every request to the app; Stop indexing of admin panel to googlebots
app.use(function(req, res, next) {
  res.setHeader("X-Robots-Tag", "noindex")
  next();
});

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  app.listen(process.env.PORT)
}

start()
