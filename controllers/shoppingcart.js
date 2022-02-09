// Import Packages
const express = require('express')
const router = express.Router()
//const Menu_item = require('../models/menu_item')
//const Users = require('../models/users')
//const Payment = require('../models/payment')

// Create GET controller
router.get('/', async (req, res) => {
  try {
    res.render('shoppingcart')
  } catch (err) {
    next(err)
  }
})
// Export module
module.exports = router
