import Vue from 'vue';

const state = {
    email: null,
    idToken: null
};

const getters = {
    isUserLogged(state) {
        if(state.idToken) {
            return true;
        } else {
            return false;
        }
    },
    token(state) {
        return state.idToken;
    }
};

const mutations = {
    saveAuthenticationInfo(state, { email, idToken }) {
        state.email = email
        state.idToken = idToken

        Vue.http.headers.common['Token'] = idToken;
    },
    clearAuthenticationInfo(state) {
        state.email = null
        state.idToken = null
        
        Vue.http.headers.common['Token'] = null;
    }
};

const actions = {
    login({ commit, dispatch }, userInfo) {
        if(!userInfo.email || !userInfo.idToken) return false; // Se nenhuma informação foi recebida, não realiza o login

        commit('saveAuthenticationInfo', userInfo);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('idToken', userInfo.idToken);

        dispatch('loadUserInfo', userInfo.email);

        return true;
    },
    logout({ commit, dispatch }) {
        commit('clearAuthenticationInfo');

        dispatch('unloadUserInfo');

        localStorage.removeItem('email');
        localStorage.removeItem('idToken');
    },
    verifySession({ commit, dispatch }) {
        const email = localStorage.getItem('email');
        const idToken = localStorage.getItem('idToken');
        if(!email || !idToken) return false;

        commit('saveAuthenticationInfo', { email, idToken });

        dispatch('loadUserInfo', email);

        return true;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};