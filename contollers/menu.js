// Import Packages
const express = require('express')
const router = express.Router()
const Items = require('../models/items')
//const User = require('../models/users')

// Create POST controller

router.get('/menu', async (req, res, next) => {
  try {
    // if is breakfast, luch or dinner display the menu according to the time
    // Find all items that are available at this time and stock is > 0
    // let items = ....
    let items = Items.find({})
    res.render('menu', { items })
  } catch (err) {
    next(err)
  }
})

// Export module
module.exports = router
