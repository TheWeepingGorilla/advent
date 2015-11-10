// app setup
var express = require('express');
var app = express();
var http = require('http').Server(app);

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

// Advent models and functions
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

// static file service
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client'));

// get service for location info
var currentLocation;
app.get('/advent', function (req, res) {
	if (!currentLocation) {
		Space.findOne({"location.x":0, "location.y":0}, function(err, retObj) {
			if (err) {
				res.send(err);
			}
			else if (retObj) {
				currentLocation = retObj;
				res.json(retObj);
			}
			else {
				res.send("No Object Found - xLoc: " + xLoc + " yLoc: " + yLoc);
			}
		});
	}
	else {
		var xLoc = parseInt(req.query.xLoc);
		var yLoc = parseInt(req.query.yLoc);
		var current = currentLocation.allowedDirections;
		var allowed = false;
		for (var i=0; i<current.length; i++) {
			if ( (current[i].x === xLoc) && (current[i].y === yLoc) ) {
				allowed = true;
			}
		}
		if (allowed) {
			Space.findOne({"location.x":xLoc, "location.y":yLoc}, function(err, retObj) {
				if (err) {
					res.send(err);
				}
				else if (retObj) {
					currentLocation = retObj;
					res.json(retObj);
				}
				else {
					res.send("No Object Found - xLoc: " + xLoc + " yLoc: " + yLoc);
				}
			});
		}
		else {
			res.json(currentLocation);
		}
	}
});

// start up server
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});