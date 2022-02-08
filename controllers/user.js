// Import Packages
const express = require('express')
const router = express.Router()

//const Users = require('../models/users')
// Create POST controller

router.get('/', (req, res) => {
  res.render('/home')
  //choose the time for the menu
  //after the time is show the list that time are in stock
})

router.get('/logout', (req, res) => {
  // req.logout()
  // req.session.destroy( => {
  //
  // })
})
// Export module
module.exports = router
