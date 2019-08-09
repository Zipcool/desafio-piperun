import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        idToken: null
    },
    getters: {
        isLoggedIn(state) {
            if(state.idToken) {
                return true;
            } else {
                return false;
            }
        }
    },
    mutations: {
        saveUserInfo(state, payload) {
            console.log('saveUserInfo mutation chamada');
            
            state.user = payload.user
            state.idToken = payload.idToken
        },
        clearUserInfo(state) {
            state.user = null
            state.idToken = null
        }
    },
    actions: {
        login({ commit, dispatch }, userInfo) {
            console.log('login action chamada');
            
            if(!userInfo.user || !userInfo.password) return; // Se nenhuma informação foi recebida, não realiza o login

            userInfo.idToken = "token recebido";

            commit('saveUserInfo', userInfo);
            
            localStorage.setItem('user', userInfo.user);
            localStorage.setItem('idToken', userInfo.idToken);
        },
        logout({ commit }) {
            console.log('logout action chamada');
            
            commit('clearUserInfo')

            localStorage.removeItem('user');
            localStorage.removeItem('idToken');
        },
        verifySession({ commit }) {
            const user = localStorage.getItem('user');
            const idToken = localStorage.getItem('idToken');
            if(!user || !idToken) return false;

            commit('saveUserInfo', { user, idToken });
            return true;
        }
    }
})