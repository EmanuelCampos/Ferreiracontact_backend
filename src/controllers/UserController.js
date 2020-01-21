const User = require('../models/User')


module.exports = {
  async store(req, res) {
    const { name, country, email, phone } = req.body

    const user = await User.create({
      name,
      country,
      email,
      phone,
    })

    return res.json(user)
  },

  async index(req, res) {
    const users = await User.find()

    return res.json(users)
  },

  async update(req, res) {

    const { _id, name, country, email, phone } = req.body

    const user = await User.findByIdAndUpdate(_id, {
      name,
      country,
      email,
      phone
    })

    return res.json(user)
  },

  async destroy(req, res) {
    const del = await User.deleteOne({ _id: req.params.id });
    return res.json(del);
  },

}