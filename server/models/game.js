const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  gameId: String,
  rounds: Number,
  roundCategories: [String],
  user:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Game', gameSchema)