const fs = require('fs');
const os = require('os');
const note = require('./note');
const _ = require('lodash');
const yargs = require('yargs');
// console.log(_.uniq(['abc', 'abc', 1, 'sdf']));
// console.log(_.isString(1));
// console.log(_.isString('asdb'));
// var a = ['abc', 'abc', 1, 'sdf'];
// console.log(_.isString(a[2]));
// console.log(_.isString(a[1]));



// fs.appendFile('test.text', 'this is the test\n', function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('append sucessfully');
// 	}
// });

// var userInfo = os.userInfo();
// fs.appendFile('test.text', 'Hello ' + userInfo.username + '\n', function(err) {
// 	if (err) {
// 		console.log(err);
// 	}
// });
// fs.appendFile('test.text', `Hello ${userInfo.username} \n`, function(err) {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// var result = note.add(1, 2);
// console.log(result);

//var command = process.argv[2];
// if (command === 'add') {
// 	console.log(note.add(1,2));
// } else {
// 	console.log('cannot recognize the command');
// }

var yArg = yargs.argv;
var command = yArg._[0];
if (command === 'add') {
	note.addNode(yArg.title, yArg.body);
} else if (command === 'read'){
	note.readNode();
} else if (command === 'list') {
	note.listNode();
} else if (command === 'remove') {
	note.removeNode();
} else {
	console.log('cannot recognize the command');
}