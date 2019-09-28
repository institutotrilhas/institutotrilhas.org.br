/* eslint-disable prettier/prettier */
import Vue from 'vue';
import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
	endpoint: window.prismic.endpoint,
	linkResolver
});

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
