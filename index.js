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

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client'));

var server = app.listen(3000, function () {
 	var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


