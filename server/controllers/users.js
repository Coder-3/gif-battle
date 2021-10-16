const router = require('express').Router()
const User = require('../models/user')

router.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)

  response.json(user)
})

router.post('/', async (request, response) => {
  const user = new User(request.body)

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = router