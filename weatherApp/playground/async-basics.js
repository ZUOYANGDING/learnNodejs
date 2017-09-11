console.log('Starting app');

setTimeout(() => {
	console.log('In first callback');
}, 1500);

setTimeout(() => {
	console.log('second call back');
}, 1400);

console.log('Finishing up')
