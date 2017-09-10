var square = (x) => {
	var result = x*x;
	return result;
}
console.log(square(5));

var user = {
	name: 'Ding',
	sayHi: () => {
		//in array function, arguments and this point to this js file(global variable), not the function
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
}
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);