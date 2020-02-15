const { Router } = require('express')
const UserController = require('./controllers/UserController')


const routes = Router();

routes.get('/users', UserController.index)

routes.get('/users', async (req, res) => {

  const match = {}

  if (req.query.published) {
    match.published = req.query.published === 'true'
  }
  try {
    await req.user.populate({
      path: 'posts',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip)
      }
    }).execPopulate()
    res.send(req.user.posts)
  } catch (error) {
    res.status(500).send()
  }
})

routes.post('/users', UserController.store)
routes.put('/users', UserController.update)
routes.delete('/users/:id', UserController.destroy);


module.exports = routes;