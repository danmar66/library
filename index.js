const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/bookList.router')
const { siteUrl, mongoUrl, port } = require('./config/app.config')

const app = express()

app.use(bodyParser.json())
app.use('/api/books', bookRouter)

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
