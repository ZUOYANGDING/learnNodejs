// var obj = {
// 	name: 'zuoyang'
// }
// var objString = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(obj);
// console.log(typeof objString);
// console.log(objString);

// var userString = '{"name:": "zuoyang", "age:": 27}';
// var objUser = JSON.parse(userString);
// console.log(typeof userString);
// console.log(userString);
// console.log(typeof objUser);
// console.log(objUser);
const fs = require('fs');

var user = {
	title: 'some',
	name: 'node'
}

var userString = JSON.stringify(user);
fs.writeFileSync('node.json', userString);

var newUserString = fs.readFileSync('node.json');
var newUser = JSON.parse(newUserString);

console.log(newUser);