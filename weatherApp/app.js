const yargs = require('yargs')
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch wather for',
			string: true
		}
	})
	.help().
	alias(`'help', 'h'`)
	.argv;

//console.log(argv);
geocode.geocodeAddress(argv.address, function(errMessage, result) {
	if (errMessage) {
		console.log(errMessage);
	} else {
		console.log(JSON.stringify(result, undefined, 2));
		weather.getWeather(result.Address, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log(JSON.stringify(res, undefined, 2));
			}
		})
	}
});

