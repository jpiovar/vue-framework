<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Username: <input type="text" v-model="nameUser"/>{{ nameUser }}<br/><br/>
      <span>userStatus: {{ userStatusView }} <br/>userData: {{ userDataView }}</span><br/>
      <button type="button" @click="loginClick">Login user</button><br/>
      <button type="button" @click="logoutClick">Logout user</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  UserData,
  UserStatus,
} from '@/types';

@Component({
  components: {},
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
})
export default class HelloWorld extends Vue {
  private msg!: string;

  nameUser: string = '';

  loginClick() {
    this.$store.dispatch('loginUser', { id: 'idUser', name: this.nameUser, email: 'emailUser' });
  }

  logoutClick() {
    this.$store.dispatch('logoutUser');
  }

  get userStatusView(): UserStatus {
    return this.$store.getters.userStatus;
  }

  get userDataView(): string {
    const { id, name, email } = this.$store.getters.userData;
    return `id: ${id} name: ${name} email: ${email}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
