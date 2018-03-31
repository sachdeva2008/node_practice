var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInfo = new Schema({

	name:String,
	address: String

});

module.exports = mongoose.model('Detail',UserInfo);
