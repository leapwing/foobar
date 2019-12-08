import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        archChategoryPath:1,
        archTagPath:1
    },
    mutations: {
        categoryPathCount(state, payload) {
            state.archChategoryPath -= 1;
        },
        tagPathCount(state, payload) {
            state.archTagPath -= 1;
        }
    },
    actions: {},
    getters: {}
});