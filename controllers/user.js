// Import Packages
const express = require('express')
const router = express.Router()
const passport = require('passport')

//const Users = require('../models/users')
// Create POST controller
router.get('/', (req, res) => {
  res.render('/home')
  //choose the time for the menu
  //after the time is show the list that time are in stock
})
router.post(
  '/login',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
  (req, res, next) => {}
)

router.get(
  '/google',
  passport.authenticate('google', { failureRedirect: '/user/login' }),
  (req, res) => {
    res.redirect('/shoppingcart')
  }
)
router.get('/logout', (req, res) => {
  // req.logout()
  // req.session.destroy( => {
  //
  // })
})
// Export module
module.exports = router
