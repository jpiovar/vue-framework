<template>
  <div class="hello">
    <h1>{{ msg }} {{ modified }}</h1>
    <p>{{ userProfile.name }} {{ userProfile.email }}</p>
    <button type="button" @click="logoutClicked">logout</button>
    <button type="button" @click="loginClicked">login</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { USER } from '@/stores/constants';
import { UserData } from '@/stores/user/user.types';

const UserStore = namespace(USER);

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
  msg!: string;

  @UserStore.Action logoutUser!: () => void;

  @UserStore.Action loginUser!: ({ id, name, email }: UserData) => void;

  @UserStore.Getter userData!: UserData;

  get modified(): string {
    return `${this.msg} modifiedapp`;
  }

  get userProfile() {
    const { name, email } = this.userData;
    return { name, email };
  }

  logoutClicked() {
    this.logoutUser();
  }

  loginClicked() {
    this.loginUser({ id: 'idUser', name: 'nameUser', email: 'emailUser' });
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0 0;
}
</style>
