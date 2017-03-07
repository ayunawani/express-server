var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var routes = require('./routes/index')
var users = require('./routes/users')
var dishes = require('./routes/dishes')
var Todo = require('./models/Todo')
var Dish = require('./models/Dish')
var dish = require('./routes/dish')
var authenticate = require('./routes/authenticate')
var register = require('./routes/register')

var app = express()

mongoose.Promise = global.Promise

// mongoose.connect('mongodb://localhost/foodbook')
mongoose.connect('mongodb://admin:admin@ds119210.mlab.com:19210/foodbook')
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err))

var db = mongoose.connection.db

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/users', users)
app.use('/dishes', dishes)
app.use('/dish', dish)
app.use('/register', register)
app.use('/authenticate', authenticate)

// var dish = new Dish({
//   name : 'Butter Chicken',
//   description: 'Marinated chicken in masala gravy',
//   origin: 'Indian/Panjabi',
//   recipe : 'make'
// })

// dish.save(function (err) {
//   if (err)
//     return console.log(err)
//   console.log('saved')
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

app.listen(4000)

module.exports = app
