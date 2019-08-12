import Vue from 'vue';

const state = {
    currentUserInfo: {
        id: null,
        account_id: null,
        name: null
    }
};

const getters = {
    currentUserInfo(state) {
        return state.currentUserInfo;
    }
};

const mutations = {
    saveUserInfo(state, { id, account_id, name }) {
        state.currentUserInfo.id = id
        state.currentUserInfo.account_id = account_id
        state.currentUserInfo.name = name
    },
    clearUserInfo(state) {
        state.currentUserInfo.id = null
        state.currentUserInfo.account_id = null
        state.currentUserInfo.name = null
    }
};

const actions = {
    loadUserInfo({ commit }, email) {
        Vue.http.get('users?email=' + email)
            .then(res => {
                commit('saveUserInfo', res.body.data[0]);
            })
            .catch(err => console.log(err));
    },
    unloadUserInfo({ commit }) {
        commit('clearUserInfo');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};