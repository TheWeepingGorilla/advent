// app setup
var express = require('express');
var app = express();
var http = require('http').Server(app);
var assert = require('assert');

var mongoose = require('mongoose');
var db = mongoose.connection;
var dbURL = 'mongodb://localhost:27017/advent';
db.on('error', console.error);
mongoose.connect(dbURL, function(err, res){
	if (err) {
		console.log('ERROR connecting to ' + dbURL + '. ' + err);
	}
	else {
		console.log('SUCCESS connecting to ' + dbURL);
	}
});

var Space = mongoose.model('Space',{name:String, description:String, location: Object, allowedDirections: Array});

function createSpace(name2Save, description2Save, location2Save, allowedDirections2Save) {
	var space2Save = new Space({
	  name: name2Save,
	  description: description2Save,
	  location: location2Save,
	  allowedDirections: allowedDirections2Save
	});

	space2Save.save(function(err, space2Save) {
	  if (err) return console.error(err);
	  console.log(space2Save);
	});
};

// createSpace("Beach Near Cave Entrance","You are standing on a desolate stretch of beach. To the east, there is a rocky cliff face with a cave entrance.",{"x":0, "y":0},[{"x":1, "y":0, "label":"East"}]);

// createSpace("Cave Opening","You are standing inside a large cave with a sandy floor. The roar of the ocean's waves is echoing all around. To the north, there is a narrow winding passage.",{"x":1, "y":0},[{"x":0, "y":0, "label":"West"},{"x":1,"y":1, "label":"North"}]);

// createSpace("Winding Passage North-South","You are in a narrow winding north-south passage.",{"x":1, "y":1},[{"x":1, "y":2, "label":"North"},{"x":1, "y":0, "label":"South"}]);


// static html service
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client'));

// get server for location info
app.get('/advent', function (req, res) {
	var xLoc = parseInt(req.query.xLoc);
	var yLoc = parseInt(req.query.yLoc);
	Space.findOne({"location.x":xLoc, "location.y":yLoc}, function(err, retObj) {
		if (err) {
			res.send(err);
		}
		else if (retObj) {
			res.json(retObj);
		}
		else {
			res.send("No Object Found - xLoc: " + xLoc + " yLoc: " + yLoc);
		}
	});
});

// start up server
var server = app.listen(3000, function () {
 	var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


