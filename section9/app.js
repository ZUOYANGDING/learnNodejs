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
	var n = note.addNode(yArg.title, yArg.body);
	if (n) {
		console.log('add sucessfully');
		note.logNode(n);
	} else {
		console.log(`title: ${yArg.title} \t has already exist in file`);
	}
} else if (command === 'read'){
	var noteFind = note.readNode(yArg.title);
	if (noteFind) {
		console.log('Note find');
		note.logNode(noteFind);
	} else {
		console.log(`cannot find the note with title: ${yArg.title}`);
	}
} else if (command === 'list') {
	var notes = note.listNode();
	if (notes) {
		console.log('List all notes');
		for (var i=0; i<notes.length; i++) {
			note.logNode(notes[i]);
		}
	} else {
		console.log('there is no notes in file');
	}
} else if (command === 'remove') {
	var removeOrNot = note.removeNode(yArg.title);
	if (removeOrNot) {
		console.log('remove successfully');
		console.log('-------------------');
		console.log(`title: ${yArg.title} has been removed`); 
	} else {
		console.log(`cannot find the title: ${yArg.title} in file`);
	}
} else {
	console.log('cannot recognize the command');
}



