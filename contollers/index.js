// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.redirect('/menu')
})

// Export module
module.exports = router
