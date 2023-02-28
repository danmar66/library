const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bookRouter = require('./routes/bookList.router')
const errorHandler = require('./middlewares/errorHandler.middleware')
const { siteUrl, mongoUrl, port } = require('./config/app.config')

const app = express()

app.use(express.json())
app.use('/api/books', bookRouter)
app.use(errorHandler)

async function start() {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoUrl)
    app.use(
      cors({
        credentials: true,
        origin: siteUrl,
      })
    )
    app.listen(port || 5000, () => console.log(`Server started`))
  } catch (e) {
    console.log(e)
  }
}

start()
