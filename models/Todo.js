var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo',TodoSchema);


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