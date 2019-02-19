import Vue from 'vue';
import Vuex from 'vuex';
import moduleTest from './modules/moduleTest.js';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleTest
    }
});