import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import user from './user';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    user
  }
};

export default new Vuex.Store<RootState>(store);
// import Vue from "vue";
// import Vuex from "vuex";
// import {
//   UserData,
//   UserStatus,
//   INITIAL,
//   LOGGED_IN,
//   LOGGED_OUT,
//   USER_DATA_EMPTY
// } from "./types";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     user: {
//       userData: USER_DATA_EMPTY,
//       userStatus: INITIAL
//     }
//   },
//   mutations: {
//     loginUser(state, payload: UserData) {
//       debugger;
//       const { id, name, email }: UserData = payload;
//       const userStatus: UserStatus = LOGGED_IN;
//       state.user = {
//         userData: { id, name, email },
//         userStatus
//       };
//     },
//     logoutUser(state) {
//       const userData: UserData = USER_DATA_EMPTY;
//       const userStatus: UserStatus = LOGGED_OUT;
//       state.user = {
//         userData,
//         userStatus
//       };
//     }
//   },
//   actions: {
//     loginUser(state, { id, name, email }: UserData) {
//       debugger;
//       state.commit("loginUser", { id, name, email });
//     },
//     logoutUser(state) {
//       state.commit("logoutUser");
//     }
//   },
//   getters: {
//     userData(state): UserData {
//       return state.user.userData;
//     },
//     userStatus(state): UserStatus | string {
//       return state.user.userStatus;
//     }
//   }
// });
