var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Dish = require('../models/Dish')

/* GET all dishes listing. */
router.get('/', function (req, res, next) {
  Dish.find(function (err, dishes) {
    if (err)
      return console.log(err)
    console.log('>>>> ' + dishes)
    res.send(JSON.stringify(dishes))
  })
})

// Get single dish based on name
router.get('/:dishId', function (req, res, next) {
  var dishId = req.params.dishId
  console.log(dishId)
  console.log(req.params)
  Dish.findOne({name: req.params.dishId}, function (err, user) {
    if (err)
      return console.log(err)
    console.log(user)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(user))
  })
})


// Add a dish
router.post('/', function (req, res , next) {
  var dish = new Dish({
    name: req.body.name,
    description: req.body.description,
    origin: req.body.origin,
    author: req.body.author,
    recipe: 'make'
  })
  dish.save(function (err) {
    if (err)
      return console.log(err)
    console.log('saved')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'saved'}))
  })
})

module.exports = router
