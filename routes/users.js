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

module.exports = router
