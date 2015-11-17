module.exports = {
  save: function (user, callback) {
  	console.log("User "+user.first_name+" saved");
  	if(callback){
  		callback(user);
  	}
  },
  get: function (id, callback) {
  	if(callback){
  		callback();
  	}
  	return {
  		id: id,
  		first_name: 'Simon',
  		last_name: 'Jaspar'
  	}
  }
}