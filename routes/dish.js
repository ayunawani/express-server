var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Dish = require('../models/Dish')

/* GET users listing. */
router.use('/', function (req, res, next) {
  console.log(req.body, req.method, req.path)

  switch (req.method) {
    case 'POST':
      postDish(req, res)
      break
    case 'GET':
      getDish(req, res)
  }
})

function postDish (req, res) {
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
}

function getDish (req, res) {
  console.log(req.params)
  Dish.findOne({name: req.params.dishId}, function (err, user) {
    if (err)
      return console.log(err)
    console.log(user)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(user))
  })
}

module.exports = router
