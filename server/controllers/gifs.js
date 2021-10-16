const router = require('express').Router()
const Gif = require('../models/gif')

router.get('/:id', async (request, response) => {
  const gif = await Gif.findById(request.params.id)

  response.json(gif)
})

router.post('/', async (request, response) => {
  const gif = new Gif(request.body)

  const savedGif = await gif.save()

  response.status(201).json(savedGif)
})

module.exports = router