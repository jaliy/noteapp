import * as types from '../mutation-types';

import {Storage as sto} from '../../api';

const state = {
	notes:[]
};
//getters
const getters = {
	allNotes:state => state.notes,
	
	filter: state => {
		return this.state.notes.filter(r => r.id!=="")
	}
};

//mutations
const mutations = {
	//load list
	[types.NOTE_LOADLIST](state){
		state.notes = sto.findAll().reverse();
	},
	//delete one
	[types.NOTE_DELETEONE](state, {id}) {
		sto.deleteOne(id);
		state.notes = sto.findAll().reverse();
	}
};

//action
const actions = {
	//load list
	deleteOne({ commit, state, getters }, {id}) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit(types.NOTE_DELETEONE, {
					id
				});
				resolve();
			}, 2000);
		})
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}
