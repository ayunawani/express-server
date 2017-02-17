var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  fristname: String,
  lastname: String,
  username: { type : String , unique : true, required : true },
  password: String,
  emailId: { type : String , unique : true, required : true },
})

module.exports = mongoose.model('User',UserSchema);


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