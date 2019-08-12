import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: null,
        idToken: null
    },
    getters: {
        isUserLogged(state) {
            console.log('isUserLogged getter chamado: ' + state.idToken);
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
            
            state.email = payload.email
            state.idToken = payload.idToken
        },
        clearUserInfo(state) {
            state.email = null
            state.idToken = null
        }
    },
    actions: {
        login({ commit }, userInfo) {
            console.log('login action chamada');
            if(!userInfo.email || !userInfo.idToken) return false; // Se nenhuma informação foi recebida, não realiza o login
            console.log('salvando dados de autenticação');
            commit('saveUserInfo', userInfo);
            localStorage.setItem('email', userInfo.email);
            localStorage.setItem('idToken', userInfo.idToken);
            return true;
        },
        logout({ commit }) {
            console.log('logout action chamada');
            
            commit('clearUserInfo')

            localStorage.removeItem('email');
            localStorage.removeItem('idToken');
        },
        verifySession({ commit }) {
            console.log('verifySession action chamada');

            const email = localStorage.getItem('email');
            const idToken = localStorage.getItem('idToken');
            if(!email || !idToken) return false;

            commit('saveUserInfo', { email, idToken });
            return true;
        }
    }
})