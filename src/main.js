import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	
    mode: 'history',
    
	base: '/noteapp/',
	
    // （缩写）相当于 routes: routes
    routes
});

const app = new Vue({
    router
}).$mount('#app');