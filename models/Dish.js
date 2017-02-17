var mongoose = require('mongoose');

var DishSchema = mongoose.Schema({
  name: String,
  description: String,
  origin: String,
  author: String,
  recipe: String,
  updated_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Dish',DishSchema);


/*
**	Data Types
**	String
**	Boolean
**	Date
**	Array
**	Number
**	ObjectId
**	Mixed
**	Buffer
*/