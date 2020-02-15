const { Router } = require('express')
const UserController = require('./controllers/UserController')


const routes = Router();

routes.get('/users', UserController.index)

routes.get('/users/posts', (req, res) => {
  const pageCount = Math.ceil(posts.length / 10);
  let page = parseInt(req.query.p);
  if (!page) { page = 1; }
  if (page > pageCount) {
    page = pageCount
  }
  res.json({
    "page": page,
    "pageCount": pageCount,
    "posts": posts.slice(page * 10 - 10, page * 10)
  });
});

routes.post('/users', UserController.store)
routes.put('/users', UserController.update)
routes.delete('/users/:id', UserController.destroy);


module.exports = routes;