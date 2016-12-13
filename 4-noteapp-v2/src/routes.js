import VueRouter from 'vue-router';

//路由懒加载,结合 Vue 的 异步组件 和 Webpack 的 code splitting feature
const Home = resolve => {
    require.ensure(['./views/home.vue'], () => {
        resolve(require('./views/home.vue'));
    });
};

const routes = [{
    path: '/',
    namme:'home',
    component :Home
}, {
    path: '/create',
    name: 'create',
    component (resolve) {
	    require.ensure(['./views/create.vue'], () => {
	        resolve(require('./views/create.vue'));
	    });
    }
}, {
    path: '/detail/:id',
    name: 'detail',
    component (resolve) {
	    require.ensure(['./views/detail.vue'], () => {
	        resolve(require('./views/detail.vue'));
	    });
    }
}, {
	path: '*',
	component: Home
}]


export default routes;