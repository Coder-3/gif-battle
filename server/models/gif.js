const mongoose = require('mongoose')

const gifSchema = mongoose.Schema({
  url: String,
  votes: Number,
  gameId: String,
  user:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

gifSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Gif', gifSchema)