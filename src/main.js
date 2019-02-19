import { hello } from './util/hello';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './style/common.scss';
import TestComponent from './components/TestComponent.vue';
import MultiTestComponent from './components/MultiTestComponent.vue';

hello();

Vue.component('test-component', TestComponent)
Vue.component('multi-test-component', MultiTestComponent)

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {
        App
    }
});