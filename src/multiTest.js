import Vue from 'vue';
import './style/multiTest.scss';
import VueModuleTest from './components/VuexModuleTest.vue';
import storeModule from './store/storeModule.js'

Vue.component('vuex-module-test', VueModuleTest);

var app = new Vue({
    el: '#app',
    store: storeModule,
    data: {
        message: 'Hello Vue'
    }
});