const weather = require('weather-js')

var getWeather = function(address, callback) {
	weather.find({search: address, degreeType: 'C'}, function(err, result) {
		if (err) {
			callback(err, undefined);
		} else {
			callback(undefined, {
				CurrentTemperature: result[0].current.temperature,
				FeelsLike: result[0].current.feelslike
			});
		}
	});
}

module.exports = {
	getWeather: getWeather
}