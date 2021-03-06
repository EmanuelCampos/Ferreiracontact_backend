const { Router } = require('express')
const UserController = require('./controllers/UserController')


const routes = Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users', UserController.update)
routes.delete('/users/:id', UserController.destroy);


module.exports = routes;