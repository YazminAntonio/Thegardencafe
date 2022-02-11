// Import Packages
const express = require('express')
const router = express.Router()
const Items = require('../models/items')

// Create POST controller
// router.get('/', async (req, res, next) => {
//   try {
//     let items = await Items.find({
//       time: req.query.search
//     })
//     let breakfast_items = items.filter(e => e.time == 'breakfast')
//     let lunch_items = items.filter(e => e.time == 'lunch')
//     let allday_items = items.filter(e => e.time == 'allday')
//
//     if (req.query.time >= 0900 && req.query.time <= 12:00) {
//       res.render('menu', { breakfast_items })
//     } else {
// 			if ( req.query.time >= 12.01 && req.query.time <= 1600) {
//       res.render('menu', { lunch_items })
//     } else
// 			if ( req.query.time >= 0900 && <= 2100){
// 	     res.render('menu', { allday_items })
// 	    }  else
// 				{
// 	      throw new Error('Sorry not open at that time!')
// 	    	}
// 			}
// 	}
//  }catch (err) {
//     next(err)
//   }
// })
//aqui inicia mi codigo de get
router.get('/', async (req, res, next) => {
  try {
    let items = await Items.find({
      time: req.query.time,
      pickuptime: req.query.pickuptime
    })

    console.log(items)
    res.render('menu', { items })

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
