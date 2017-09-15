const request = require('request');

var geocodeAddress = function(address, callback) {
	//const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
	var encodeAddress = encodeURIComponent(address);

	request({
		//url: baseUrl+encodeAddress,
		url :`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
		json: true

	}, function(error, response, body) {
		//console.log(JSON.stringify(response, undefined, 2));
		//console.log(JSON.stringify(body, undefined, 2));
		if (error) {
			callback('Unable connect to google server');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				Address: body.results[0].formatted_address,
				Latitude: body.results[0].geometry.location.lat,
				Longitude: body.results[0].geometry.location.lng
			});
		}
	});
}

module.exports = {
	geocodeAddress: geocodeAddress
}