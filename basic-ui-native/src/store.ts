import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'hello vuex',
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      debugger;
      state.count += payload;
    },
  },
  actions: {
    increment(state, payload) {
      debugger;
      state.commit('increment', payload);
    },
  },
  getters: {
    message(state) {
      return state.message;
    },
    counter(state) {
      return state.count;
    },
  },
});
