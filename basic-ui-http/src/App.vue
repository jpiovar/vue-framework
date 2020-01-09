<template>
  <div id="app">
    <Main v-if="userStatusView === 'loggedIn'" msg="Welcome to Your Vue.js + TypeScript App" />
    <Login v-else :hlaska="hlaska" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import Main from "./components/main/Main.vue";
import Login from "./components/login/Login.vue";
import { USER } from './store/constants';
import { UserData } from './store/user/user.types';

const UserStore = namespace(USER);

@Component({
  components: {
    Main,
    Login
  }
})
export default class App extends Vue {
  private var1: String = "janko";

  private hlaska: String = "pokus";

  @UserStore.Getter userStatus!: any;

  created() {
    debugger;
    this.var1 = "jozko";
  }

  mounted() {
    debugger;
    this.var1 = "eva";
    this.hlaska = "nas vlastni text";
  }

  get userStatusView(): any {
    return this.userStatus;
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
