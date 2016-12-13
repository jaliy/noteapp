
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
		
		super._sync(records.map((r) => {
				if(r.id === idKey){
					Object.assign(r, record);
				}
				return r;
			}
		));
		return true;
	}
	deleteOne(idKey) {
		let records=this.findAll();
		
		super._sync(records.filter(r => r.id!==idKey));
		return true;
	}
	findAll() {
		super._init();
		return JSON.parse(localStorage.notes);
	}
	findOne(idKey) {
		let records=this.findAll();
		
		return records.find(r => r.id===idKey)
	}
}
