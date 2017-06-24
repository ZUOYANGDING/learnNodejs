// module.exports.add = function(a, b) {
// 	return a+b;
// }
// module.exports.add = (a,b) => {
// 	return a+b;
// }
const fs = require('fs');
var add = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
	try {
		var notesString = fs.readFileSync('notes.json');
		notes = JSON.parse(notesString);
		//console.log(notesObj);
	} catch (err) {

	}

	var duplicateNote = notes.filter(function(note) {
		return note.title === title;
	});
	if (duplicateNote.length === 0) {
		console.log(duplicateNote.length);
		notes.push(note);
		fs.writeFileSync('notes.json', JSON.stringify(notes));
	} else {
		console.log('Title:' + title + ' has already exist in file');
	}
}

var list = () => {
	console.log('list all nodes');
}

var read = () => {
	console.log('read the nodes');
}

var remove = () => {
	console.log('remove the nodes');
}

module.exports = {
	addNode: add,
	listNode: list,
	readNode: read,
	removeNode: remove
}