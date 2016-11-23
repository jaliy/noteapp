var uuid = require('uuid');

export default class Storage {
 	// implemented by sub-classes
	insertOne(record) {}
 	// implemented by sub-classes
	updateOne(record) {}
 	// implemented by sub-classes
	deleteOne(idKey) {}
 	// implemented by sub-classes
	findOne(idKey) {}
 	// implemented by sub-classes
	updateOne(idKey){}
	
	findAll() {
	}
	
	_init() {
		//init
		if(localStorage.notes === undefined) {
			localStorage.notes = JSON.stringify([]);
		}
	}
	_getKey(){
		return uuid.v1();
	}
	_sync(notes) {
		this._init();
		localStorage.notes = JSON.stringify(notes);
	}
}
