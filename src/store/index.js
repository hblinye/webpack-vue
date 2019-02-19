import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    testMessage: 'this is test message from vuex',
    count: 0
};
const getters = {
    getTestMessage(state) {
        return state.testMessage
    },
    getCount(state) {
        return state.count
    }
};
const mutations = {
    countUp(state) {
        state.count += 1
    },
    setTestMessage(state, str) {
        state.testMessage = str
    }
};
const actions = {
    countUp(context) {
        context.commit('countUp')
    },
    setTestMessage(context, str) {
        context.commit('setTestMessage', str)
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;