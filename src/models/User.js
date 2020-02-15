const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  phone: String,

})
UserSchema.plugin(mongoosePaginate);



module.exports = mongoose.model('User', UserSchema)