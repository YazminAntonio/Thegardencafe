const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the results moodel
module.exports = mongoose.model('users', {
  name: {
    type: String,
    required: true
  },
  password: {
    type: ObjectId,
    ref: 'user in google' //preguntar como se hace eso
  },
  email: {
    type: String,
    required: true
  }
})
