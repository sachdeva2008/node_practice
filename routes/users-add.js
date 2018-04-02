var express = require('express');
var db = require('../db');
var router = express.Router();
//var ObjectId = require('mongodb').ObjectID;

//var app = require('../app');
/* GET users listing. */


// fetching records code starts...

router.get('/getrecords', function(req, res, next) {

	//res.send(req.query.id); //for fetching get parameters..
	var collection = db.get().collection(req.query.col);

	collection.find().toArray(function(err, docs) {

		/*for (var i = 0; i < docs.length; i++) {
		res.write("Name: <a href='#'>fsfsdf</a>" + docs[i].name);
		res.write("  Company: " + docs[i].company);
		res.write("\r\n");
		}
		res.end();*/
		res.render('users', { title: 'Users', data:docs});
	});
	
	
});

// fetching  records code ends...


// creating collection code starts...

router.get('/createcollection', function(req, res, next) {
	db.create('check1', function(err, res) {
	    if (err) throw err;
	    res.send("Collection created!");
	    db.close();
	  });
});

// creating collection code ends......

// inserting records code starts...

router.get('/insertrecords', function(req, res, next) {

	var myobj = { name: req.query.name, company: req.query.company };
	db.get().collection("work_info").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    //res.send("records inserted");
	    console.log("records inserted");
	    db.close();
	  });
 

});

// inserting record code ends..

// fetch single record code starts

router.get('/getsinglerecord', function(req, res, next) {

	//res.send(req.query.id); //for fetching get parameters..
	var collection = db.get().collection(req.query.col);
	var idd = new require('mongodb').ObjectID(req.query.id);
	collection.findOne({_id:idd}).then(function(docs) {

		res.send(JSON.stringify(docs));
		res.end();
	});
	
	
});



module.exports = router;
