/* eslint-disable prettier/prettier */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/eventos',
			name: 'eventos',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "eventos" */ './views/Eventos.vue')
		},
		{
			path: '/blog/',
			component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
			children: [
				{
					path: '',
					component: () => import(/* webpackChunkName: "blog home" */ './components/BlogHome.vue')
				},
				{
					path: ':uid',
					component: () => import(/* webpackChunkName: "post" */ './components/BlogPost.vue')
				}
			]
		}
	]
});
