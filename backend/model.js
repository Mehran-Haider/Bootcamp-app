const mongoose = require('mongoose');

const userdata = mongoose.Schema({
 name:String,
 description:String,
 date:String,
 duration:String,
 activity:String,

});

const user = mongoose.model('usertable',userdata);
module.exports = user;