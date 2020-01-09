<template>
  <div>
    <h1>{{ hlaska }}</h1>
    <h2>{{userDataView}}</h2>
    <h3>{{userStatusView}}</h3>
    <button type="button" @click="logoutClick">Logout user</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { UserStatus } from "../store/types";
import { namespace } from 'vuex-class';
import { USER } from '../../store/constants';
import { UserData } from '../../store/user/user.types';

const UserStore = namespace(USER);

@Component({
  components: {},
  props: {
    hlaska: {
      required: false,
      type: String
    }
  }
})

export default class Main extends Vue {
  private hlaska!: string;

  @UserStore.Action logoutUser!: () => void;

  @UserStore.Getter userStatus!: any;

  @UserStore.Getter userData!: any;

  get userStatusView(): any {
    return this.userStatus;
  }

  get userDataView(): string {
    const { id, name, email } = this.userData;
    return `id: ${id} name: ${name} email: ${email}`;
  }

  logoutClick() {
  // this.$store.dispatch("logoutUser");
    this.logoutUser();
  }
}
</script>
