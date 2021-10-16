const router = require('express').Router()
const Game = require('../models/game')

router.get('/:id', async (request, response) => {
  const game = await Game.findById(request.params.id)

  response.json(game)
})

router.post('/', async (request, response) => {
  const game = new Game(request.body)

  const savedGame = await game.save()

  response.status(201).json(savedGame)
})

module.exports = router