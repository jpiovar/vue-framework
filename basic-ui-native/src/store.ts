import Vue from 'vue';
import Vuex from 'vuex';
import {
  UserData,
  UserStatus,
  INITIAL,
  LOGGED_IN,
  LOGGED_OUT,
} from '@/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userData: { id: '', name: '', email: '' },
      userStatus: INITIAL,
    },
  },
  mutations: {
    loginUser(state, payload: UserData) {
      const { id, name, email }: UserData = payload;
      const userStatus: UserStatus = LOGGED_IN;
      state.user = {
        userData: { id, name, email },
        userStatus,
      };
    },
    logoutUser(state) {
      const userData: UserData = { id: '', name: '', email: '' };
      const userStatus: UserStatus = LOGGED_OUT;
      state.user = {
        userData,
        userStatus,
      };
    },
  },
  actions: {
    loginUser(state, { id, name, email }: UserData) {
      state.commit('loginUser', { id, name, email });
    },
    logoutUser(state) {
      state.commit('logoutUser');
    },
  },
  getters: {
    userData(state): UserData {
      return state.user.userData;
    },
    userStatus(state): UserStatus|string {
      return state.user.userStatus;
    },
  },
});
