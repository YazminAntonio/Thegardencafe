const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('stock', {
  stock_item: {
    type: ObjectId,
    ref: 'menu',
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
