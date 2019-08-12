import Vue from 'vue'
import Vuex from 'vuex'

import authentication from './modules/authentication'
import user from './modules/user'
import activities from './modules/activities'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        authentication,
        user,
        activities
    }
})