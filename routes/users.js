var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/User')

/* GET users listing. */

router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err)
      return console.log(err)
    console.log('>>>> ' + users)
    res.send(JSON.stringify(users))
  })
})

router.get('/:username', function (req, res, next) {
  let username = req.params.username

  User.findOne({ username: username }, function (err, user) {
    if (err)
      return console.log(err)
    console.log(user)
    res.send(JSON.stringify(user))
  })
})

router.post('/:username', function (req, res, next) {
  let username = req.params.username
  console.log(req.body)
  User.update({username: username}, user, (err, numberAffected, rawResponse) => {
    if (err)
      return console.log(err)

    console.log('saved')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'updated'}))
  })
})

module.exports = router
