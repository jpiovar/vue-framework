<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h2 v-bind:class="{red: userStatusView==='loggedIn'}">{{userStatusView}}</h2>-->
    <!--<span v-if="userStatusView==='loggedIn'">nalogovany</span>-->
    <!--<h2>{{userDataView}}</h2>-->
    <input type="text" name="login" v-model="loginName"/>
    <button type="button" @click="loginClick">Login user</button>
    <span>{{loginName}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import { USER } from '../../store/constants';
import { UserData } from '../../store/user/user.types';

const UserStore = namespace(USER);

// import { UserStatus } from "../store/types";

@Component({
  components: {},
  props: {
    msg: {
      required: false,
      type: String
    }
  }
})
export default class Login extends Vue {
  private msg!: string;

  private loginName: string = '';

  @UserStore.Action loginUser!: ({ id, name, email }: UserData) => void;

  @UserStore.Getter userStatus!: any;

  loginClick() {
    debugger;
    if (this.loginName === 'Janko') {
      this.loginUser({ id: 'idUser', name: this.loginName, email: 'emailUser' });
      // this.$store.dispatch("loginUser", {
      //   id: "idUser",
      //   name: this.loginName,
      //   email: "emailUser"
      // });
    }
  }

  /*
  logoutClick() {
    this.$store.dispatch("logoutUser");
  }

  get userStatusView(): UserStatus {
    return this.$store.getters.userStatus;
  }

  get userDataView(): string {
    const { id, name, email } = this.$store.getters.userData;
    return `id: ${id} name: ${name} email: ${email}`;
 }
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  background-color: red;
}
</style>
