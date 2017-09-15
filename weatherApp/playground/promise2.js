const request = require('request');

var geocodeAddress = function(address) {
	return new Promise(function(resolve, reject) {
		var encodeAddress = encodeURIComponent(address);

		request({
			url :`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
			json: true
		}, function(error, response, body) {
			if (error) {
				reject('Unable connect to google server');
			} else if (body.status === 'ZERO_RESULTS') {
				reject('Unable to find that address');
			} else if (body.status === 'OK') {
				resolve({
					Address: body.results[0].formatted_address,
					Latitude: body.results[0].geometry.location.lat,
					Longitude: body.results[0].geometry.location.lng
				});
			}
		});
	});

}

geocodeAddress('230022').then(function(location) {
	console.log(JSON.stringify(location, undefined, 2));
}, function(errorMessage) {
	console.log(errorMessage);
});