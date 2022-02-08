// Import Packages
const express = require('express')
const router = express.Router()
const Items = require('../models/items')
const Stock = require('../models/stock')

// Create POST controller

router.get('/menu', async (req, res, next) => {
  try {
    // if is breakfast, luch or dinner display the menu according to the time
    // Find all items that are available at this time and stock is > 0
    // let items = ....
    let stock = Stock.find(req.stock.count)
    if (stock >= 1) {
      let items = Items.find({})
      res.render('menu', { items })
    } else {
      res.render('we are out of stock')
    }
  } catch (err) {
    next(err)
  }
})

// Export module
module.exports = router
