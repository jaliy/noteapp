
import Storage from './base';

export default class HTML5Storage extends Storage {
	insertOne(record) {
		let id = super._getKey();
		record['id'] = id;
		let notes = this.findAll();
		notes.push(record);
		
		super._sync(notes);
		
		return id;
	}
	updateOne(record) {
		let records=this.findAll();
		
		for(let i=0;i<records.length; i++) {
			if(records[i].id===record.id) {
				Object.assign(records[i], record)
				super._sync(records);
				return true;
			}
		}
		return false;
	}
	deleteOne(idKey) {
	}
	findAll() {
		super._init();
		return JSON.parse(localStorage.notes);
	}
	findOne(idKey) {
		let records=this.findAll();
		
		for(let i=0;i<records.length; i++) {
			if(records[i].id===idKey) {
				return records[i];
			}
		}
		return null;
	}
}
