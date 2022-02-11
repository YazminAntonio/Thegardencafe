// Import Packages
const express = require('express')
const router = express.Router()
const Items = require('../models/items')

// Create POST controller
//aqui inicia mi codigo de get
router.get('/', async (req, res, next) => {
  try {
    let items = await Items.find({
      $or: [{ time: req.query.time }, { time: 'allday' }]
    })
    console.log(items)
    res.render('menu', {
      items
    })

    //res.render('menu')
    // } else {
    //   res.render('we are out of stock')
    //}
  } catch (err) {
    next(err)
  }
}) //de aqui esta el final de lo que implemente
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
