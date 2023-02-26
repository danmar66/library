require('dotenv').config()

const port = process.env.PORT || 5000

const mongoUrl =
  `mongodb+srv://${process.env.MONGO_USERNAME}` +
  `:${process.env.MONGO_PASSWORD}` +
  `@${process.env.MONGO_HOSTNAME}` +
  `/${process.env.MONGO_DB}`

const siteUrl = process.env.SITE_URL

module.exports = {
  mongoUrl,
  port,
  siteUrl,
}
