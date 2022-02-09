// Import Packages
const express = require('express')
const router = express.Router()
const Items = require('../models/items')

// Create POST controller

router.get('/', async (req, res, next) => {
  try {
    // if is breakfast, luch or dinner display the menu according to the time
    // Find all items that are available at this time and stock is > 0
    // let items = ....
    // let stock = Stock.find(req.stock.count)
    // if (stock >= 1) {
    //   let items = Items.find({})
    //  res.render('menu', { items })
    res.render('menu')
    // } else {
    //   res.render('we are out of stock')
    //}
  } catch (err) {
    next(err)
  }
})
router.get('/:id', async (req, res, next) => {
  //res.render('menu/item')
  //find the menu //populate id
  let item = await Items.findById(req.params.id)
  //console.log(item)
  //pass item to template
  res.render('menu/item', { item })
})

// Export module
module.exports = router
