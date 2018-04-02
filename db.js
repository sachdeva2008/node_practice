/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/user');

//var db = mongoose.connection;



function connectDatabase() {
    return db;
}

module.exports = connectDatabase();*/

var url = 'mongodb://localhost:27017/'; 

var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

exports.connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err)
    state.db = db
    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

exports.create = function(name,done){
	state.db.createCollection(name, function(err, res) {
		if (err) return done(err);
		done()
		
  	});
}