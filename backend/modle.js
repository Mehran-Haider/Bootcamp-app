const mongoose = require('mongoose');

const userdata = mongoose.Schema({
 name:String,
 lname:String,
 subject:String,
 email:String,
 message:String,

});

const user = mongoose.model('userfeedback',userdata);
module.exports = user;