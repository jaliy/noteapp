import VueRouter from 'vue-router';

//路由懒加载,结合 Vue 的 异步组件 和 Webpack 的 code splitting feature
const Home = resolve => {
    require.ensure(['./components/home.vue'], () => {
        resolve(require('./components/home.vue'));
    });
};

const routes = [{
    path: '/',
    namme:'home',
    component :Home
},{
    path: '/r1',
    name:'r1',
    component (resolve) {
	    require.ensure(['./components/r1.vue'], () => {
	        resolve(require('./components/r1.vue'));
	    });
    }
}, {
    path: '/r2',
    name: 'r2',
    component (resolve) {
	    require.ensure(['./components/r2.vue'], () => {
	        resolve(require('./components/r2.vue'));
	    });
    }
},{
	path: '*',
	component: Home
}]


export default routes;