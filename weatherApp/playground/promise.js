// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('it works');
// 		reject('it does not work');
// 	}, 2500)
// });

// somePromise.then((message) => {
// 	console.log('Success', message);
// }, (errorMessage) => {
// 	console.log('Error', errorMessage);
// });
var asyAdd = function (a, b) {
 	return new Promise(function(resolve, reject) {
	 	setTimeout(function () {
	 		if (typeof a === 'number' && typeof b === 'number') {
	 			resolve (a+b);
	 		} else {
	 			reject('Arguments must be numbers');
	 		}
	 	}, 1500);
	});
}


//this one have a problem, that when get the first error by reject function
//then the first promise has no problem
//so in the chainning promise function, run the result function
asyAdd(5,'7').then(function(result) {
 	console.log(result);
 	return asyAdd(res, 33);
}, function(errorMessage) {
 	console.log(errorMessage);
}).then(function(res) {
 	console.log('the outcome should be 45 ', res);
}, function(errorMessage) {
 	console.log(errorMessage);
});

//this one is correct for chainning promise
asyAdd(5,'7').then(function(result) {
 	console.log(result);
 	return asyAdd(res, 33);
}).then(function(res) {
 	console.log('the outcome should be 45 ', res);
}).catch(function(errorMessage) {
	console.log(errorMessage);
});