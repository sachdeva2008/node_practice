var express = require('express');
var db = require('../db');
var router = express.Router();

//var app = require('../app');
/* GET users listing. */


router.get('/', function(req, res, next) {
//var url = "mongodb://localhost:27017/";
	var collection = db.get().collection('info');

  collection.find().toArray(function(err, docs) {
    res.send(docs);
  });
});


module.exports = router;
