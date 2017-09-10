// module.exports.add = function(a, b) {
// 	return a+b;
// }
// module.exports.add = (a,b) => {
// 	return a+b;
// }
const fs = require('fs');

var fatchNote = function() {
	try{
		var notesString = fs.readFileSync('notes.json');
		var notes = JSON.parse(notesString);
		return notes;
	} catch (err) {
		return []
	}
}

var saveNote = function(notes) {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var add = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
	
	notes = fatchNote();
	var duplicateNote = notes.filter(function(note) {
		return note.title === title;
	});
	//var duplicateNote = notes.filter((note) => note.title === title);
	if (duplicateNote.length === 0) {
		//console.log(duplicateNote.length);
		notes.push(note); 
		saveNote(notes);
		return note;
	}
}

var list = () => {
	var notes = fatchNote();
	if (notes.length !== 0) {
		return notes;
	}
}

var read = (title) => {
	var notes = fatchNote();
	var noteFind = notes.filter(function(note) {
		return note.title === title;
	});
	if (noteFind.length !== 0) {
		return noteFind[0];
	}
}

var remove = (title) => {
	var notes = fatchNote();
	var filteredNotes = notes.filter(function(note) {
		//console.log(note.title);
		//console.log(title);
		return note.title !== title; 
	});
	if (filteredNotes.length !== notes.length) {
		saveNote(filteredNotes);
		return true;
	} else {
		return false;
	}
}

var log = (note) => {
	console.log('---------------');
	console.log(`title: ${note.title}`);
	console.log(`body: ${note.body}`);
}

module.exports = {
	addNode: add,
	listNode: list,
	readNode: read,
	removeNode: remove,
	logNode: log
}