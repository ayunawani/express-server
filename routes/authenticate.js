var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/User')

/* GET users listing. */
router.get('/', function (req, res, next) {
  var username = req.query.username
  var password = req.query.password
  var response = {}
  User.findOne({username: username}, function (err, user) {
    try {
      if (err) {
        res.send(JSON.stringify({ status: 'error',message: 'username not found'}))
        return console.log(err)
      }
      if (user == null) {
        res.send(JSON.stringify({ status: 'error',message: 'username not found'}))
        return
      }
      console.log('>>>> ' + user)
      if (user.password === req.query.password)
        response = { status: 'success',message: 'authenticated successfully', user: user }
      else
        response = { status: 'error',authenticate: 'password incorrect' }

      res.send(JSON.stringify(response))
    } catch(e) {
      console.log(e)
      res.send(JSON.stringify({ status: 'error',message: 'username not found'}))
    }
  })
})

module.exports = router
