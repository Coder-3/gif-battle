const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const usersRouter = require('./controllers/users')
const gifsRouter = require('./controllers/gifs')
const gamesRouter = require('./controllers/games')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/gifs', gifsRouter)
app.use('/api/games', gamesRouter)

module.exports = app