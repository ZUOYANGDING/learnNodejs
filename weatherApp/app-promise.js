const yargs = require('yargs');
const axios = require('axios');

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

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	console.log(response.data.results[0].formatted_address);

	lat = response.data.results[0].geometry.location.lat;
	lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/c2b7b02dfe40b07f9c094ac42c838e2b/${lat},${lng}`;
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log('Temperature: ', temperature);
	console.log('ApparentTemperature: ', apparentTemperature);
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API address');
	} else {
		console.log(e.message);
	}
});