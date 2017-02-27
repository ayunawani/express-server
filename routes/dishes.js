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
  Dish.findOne({name: req.params.dishId}, function (err, dish) {
    if (err)
      return console.log(err)
    console.log(dish)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(dish))
  })
})

// Add a dish
router.post('/', function (req, res , next) {
  console.log(JSON.stringify(req.body.id))
  if (req.body.id) update(req, res)
  else save(req, res)
})

router.delete('/:dishId', function (req, res , next) {
  var dishId = req.params.dishId
  console.log(JSON.stringify(dishId))
  Dish.remove({_id: dishId}, function (err) {
    if (err) return console.log(err)
    console.log('deleted')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'delete'}))
  })
})

function save (req, res) {
  var dish = new Dish({
    name: req.body.name,
    description: req.body.description,
    origin: req.body.origin,
    author: req.body.author,
    image: req.body.image,
    recipe: 'make'
  })
  dish.save(function (err) {
    if (err)
      return console.log(err)
    console.log('saved')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'saved'}))
  })
}

function update (req, res) {
  console.log('.>>>>>>>>>.')
  id = req.body.id
  delete req.body.id
  console.log(req.body.id)
  Dish.update({_id: id}, req.body, (err, numberAffected, rawResponse) => {
    if (err)
      return console.log(err)

    console.log('saved')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'saved'}))
  })
}

module.exports = router
