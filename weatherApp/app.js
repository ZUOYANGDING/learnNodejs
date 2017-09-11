const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?&latlng=40.41941,-86.896126',
	json: true

}, function(error, response, body) {
	console.log(body);
});