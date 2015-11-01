// app setup
var express = require('express');
var app = express();
var http = require('http').Server(app);

// mongo setup
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/advent';
MongoClient.connect(url, function(err, db) {
  if (err) {
  	console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
	  assert.equal(null, err);
	  console.log("Connected correctly to server.");
	  db.close();
	}
});

// static html service
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client'));

var spaces = [
	{
		"name": "Beach Near Cave Entrance",
		"description": "You are standing on a desolate stretch of beach. To the east, there is a rocky cliff face with a cave entrance.",
		"location": [0,0,0],
		"allowedDirections": [ [1,0,0] ]
	},
	{
		"name": "Cave Opening",
		"description": "You are standing inside a large cave with a sandy floor. The roar of the ocean's waves is distant and echoing. To the north, there is a narrow winding passage.",
		"location": [1,0,0],
		"allowedDirections":[ [-1,0,0],[0,1,0] ]
	},
	{
		"name": "Winding Passage North-South",
		"description":"You are in a narrow winding north-south passage.",
		"location": [1,1,0],
		"allowedDirections":[ [0,1,0],[0,-1,0] ]
	}
];


// get server for location info
app.get('/:location', function(req, res) {
var q = spaces[req.params.location];
  res.json(q);
});

// start up server
var server = app.listen(3000, function () {
 	var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


