const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  phone: String,
  timestamps: {
    createdAt: 'created_at'
  }

})
UserSchema.plugin(mongoosePaginate);



module.exports = mongoose.model('User', UserSchema)