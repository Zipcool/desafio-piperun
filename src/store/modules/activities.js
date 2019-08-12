import Vue from 'vue';

const state = {
    activityTypes: [],
    activities: [],
    pagination: null
};

const getters = {
    activityTypes(state) {
        return state.activityTypes;
    },
    activities(state) {
        return state.activities;
    },
    pagination(state) {
        return state.pagination;
    }
};

const mutations = {
    setActivityTypes(state, activityTypes) {
        state.activityTypes = activityTypes;
    },
    clearActivityTypes(state) {
        state.activityTypes = [];
    },
    setActivities(state, activities) {
        state.activities = activities;
    },
    clearActivities(state) {
        state.activities = [];
    },
    setPagination(state, meta) {
        state.pagination = meta;
    },
    clearPagination(state) {
        state.pagination = null;
    }
};

const actions = {
    searchActivities({ commit }, { page, show}) {
        Vue.http.get('activities?page=' + page + '&show=' + show)
            .then(res => {
                console.log(res);
                console.log(res.body.meta);
                // console.log(res.body.data);
                
                commit('setPagination', res.body.meta)
                commit('setActivities', res.body.data);
            })
            .catch(err => console.log(err));
    },
    repeatLastSearchActivities({ dispatch, getters }) {
        dispatch('searchActivities', { page: getters.pagination.current_page, show: getters.pagination.per_page } );
    },
    clearStoredActivities({ commit }) {
        commit('clearActivities');
        commit('clearPagination');
    },
    loadActivityTypes({ commit, getters }) {
        if(!getters.isUserLogged) return;

        Vue.http.get('activityTypes')
            .then(res => {
                console.log("Carregando atividades");
                
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