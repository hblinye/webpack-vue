const state = {
    testMessage: 'this is test message from vuex with modules',
    show: true
};

const getters = {
    getTestMessage (state) {
        return state.testMessage
    },
    isShow (state) {
        return state.show
    }
};

const mutations = {
    setTestMessage (state, str) {
        state.testMessage = str
    },
    toggleShow (state) {
        state.show = !state.show
    }
};

const actions = {
    setTestMessage (context, str) {
        context.commit('setTestMessage', str)
    },
    toggleShow (context) {
        context.commit('toggleShow')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}