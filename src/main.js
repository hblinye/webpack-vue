import { hello } from './util/hello';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import './style/common.scss';
import TestComponent from './components/TestComponent.vue';
import MultiTestComponent from './components/MultiTestComponent.vue';
import routers from './routers.js';

hello();

Vue.use(VueRouter)
Vue.component('test-component', TestComponent)
Vue.component('multi-test-component', MultiTestComponent)

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    router,
    components: {
        App
    }
});