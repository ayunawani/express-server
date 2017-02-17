var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/User')

/* Post user listing. */
router.post('/', function (req, res, next) {
  var body = req.body
  console.log(body)
  var user = new User({
    fristname: body.firstname,
    lastname: body.lastname,
    username: body.username,
    password: body.password,
    emailId: body.emailId
  })
  user.save(function (err) {
    if (err)
      return console.log(err)
    console.log('user saved')
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({response: 'saved'}))
  })
})

module.exports = router
