import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: {
      message: 'hello vuex',
      count: 0,
    },
  },
  mutations: {
    increment(state, payload) {
      debugger;
      state.msg.count += payload;
    },
  },
  actions: {
    increment(state, { num }: { num: number }) {
      debugger;
      state.commit('increment', num);
    },
  },
  getters: {
    message(state) {
      return state.msg.message;
    },
    counter(state) {
      return state.msg.count;
    },
  },
});
