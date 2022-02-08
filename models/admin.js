const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('admin', {
  name: {
    type: ObjectId,
    required: true
    // ref: "admin" log in with google
  }
})
