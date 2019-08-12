import Vue from 'vue';

const state = {
    activityTypes: []
};

const getters = {
    activityTypes(state) {
        return state.activityTypes;
    }
};

const mutations = {
    setActivityTypes(state, activityTypes) {
        state.activityTypes = activityTypes;
    },
    clearActivityTypes(state) {
        state.activityTypes = [];
    }
};

const actions = {
    loadActivityTypes({ commit, getters }) {
        if(!getters.isUserLogged) return;

        Vue.http.get('activityTypes')
            .then(res => {
                console.log("Carregando atividades");
                // console.log(res);
                // console.log(res.body.data);
                
                let activityTypes = [];
                for (let key in res.body.data) {
                    let type = res.body.data[key];

                    activityTypes.push({
                        id: type.id,
                        name: type.name
                    });
                }

                console.log(activityTypes);

                commit('setActivityTypes', activityTypes);
            })
            .catch(err => console.log(err));
    },
    unloadActivityTypes({ commit }) {
        commit('clearActivityTypes');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};