import Vue from 'vue';
import Vuex from 'vuex';
import {
  UserData,
  UserStatus,
  INITIAL,
  LOGGED_IN,
  LOGGED_OUT,
  USER_DATA_EMPTY,
} from '@/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userData: USER_DATA_EMPTY,
      userStatus: INITIAL,
    },
  },
  mutations: {
    
  },
  actions: {
    
  },
});
