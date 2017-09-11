var getUser = function(id, callback) {
	var user = {
		id: id,
		name: 'Ding'
	}
	setTimeout(function(){
		callback(user);
	}, 3000);
}

getUser(25, function(userObj) {
	console.log(userObj);
});