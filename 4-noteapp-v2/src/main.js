import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';

import routes from './routes';
import store from './store';


Vue.use(VueRouter);

FastClick.attach(document.body);

const router = new VueRouter({
	//default to hash, availble value[hash, history]
    mode: 'hash',
    
	base: '/noteapp/4-noteapp-v2',
	
    // （缩写）相当于 routes: routes
    routes
});

const app = new Vue({
    router,
    store
}).$mount('#app');