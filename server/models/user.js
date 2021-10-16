const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  totalVotes: Number,
  gameId: String,
  gifs:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gif'
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', userSchema)