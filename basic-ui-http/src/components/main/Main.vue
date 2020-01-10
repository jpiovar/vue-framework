<template>
  <div>
    <div>
      <h1>{{ hlaska }}</h1>
      <h2>{{userDataView}}</h2>
      <h3>{{userStatusView}}</h3>
      <button type="button" @click="logoutClick">Logout user</button>
    </div>
    <div :id="idComponent" class="subcategory">
      <p class="search-dropdown" id="kmat">
        <label>KMAT</label>
        <multiselect
        v-model="valueKmat" :options="optionsKmat"
        :custom-label="customSelectKmat"
        placeholder=""
        label="title" track-by="title"
        :show-labels="false"
        :allow-empty="false"
        @select="onChangeMultiselect($event, 'kmat')">
        </multiselect>
      </p>
      <p id="mvm2">
        MVM2 <input v-model="valueMvm2"/>
      </p>
      <div class="confirm-btn">
        <span><button type="button" class="btn btn-primary" @click="confirmFilter">Potvrd</button> {{limitInfo}}</span>
      </div>
      <p class="table container">
        <table class="table table-hover">
          <thead>
            <tr>
            <th>KMAT</th>
            <th>MNOZSTVI</th>
            <th>HMOTNOST</th>
            <th>MVM1</th>
            <th>MVM2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in itemsJournalFiltered" :key="item._id" :id="item._id" :index="index">
              <td>{{item.kmat}}</td>
              <td>{{item.mnozstvi}}</td>
              <td>{{item.hmotnost}}</td>
              <td>{{item.mvm1}}</td>
              <td>{{item.mvm2}}</td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { UserStatus } from "../store/types";
import { namespace } from 'vuex-class';
import Multiselect from 'vue-multiselect';
import { USER } from '../../store/constants';
import { UserData } from '../../store/user/user.types';
import { HttpMockService, HttpService } from '@/services/http.service';

const UserStore = namespace(USER);

const journalBaseUrl = process.env.VUE_APP_JOURNAL_URL;
const limit = process.env.VUE_APP_JOURNAL_LIMIT;

const httpService = new HttpService();
const httpMockService = new HttpMockService();

@Component({
  components: {
    Multiselect
  },
  props: {
    hlaska: {
      required: false,
      type: String
    }
  }
})

export default class Main extends Vue {
  private hlaska!: string;

  idComponent: string = 'journalReview';

  valueKmat: any = null;

  valueMvm2: any = null;

  optionsKmat: any = [];

  itemsJournal: any = [];

  itemsJournalFiltered: any = [];

  @UserStore.Action logoutUser!: () => void;

  @UserStore.Getter userStatus!: any;

  @UserStore.Getter userData!: any;

  created() {
    this.loadJournalFilterItems();
    this.loadJournalItems();
  }

  get userStatusView(): any {
    return this.userStatus;
  }

  get userDataView(): string {
    const { id, name, email } = this.userData;
    return `id: ${id} name: ${name} email: ${email}`;
  }

  get limitInfo(): String {
    return `current limit: ${limit} items`;
  }

  get generateUrl(): string {
    let queryString = '';
    if (this.valueKmat && this.valueKmat.title) {
      queryString = `${queryString}kmat=${this.valueKmat.title}&`;
    }
    if (this.valueMvm2) {
      queryString = `${queryString}mvm2=${this.valueMvm2}&`;
    }
    queryString = `${queryString}limit=${limit}&`;
    if (queryString) {
      queryString = `?${queryString}`;
      queryString = queryString.slice(0, -1);
    }
    return `${journalBaseUrl}${queryString}`;
  }

  onChangeMultiselect(event: any, id: any) {
    if (id === 'kmat') {
      this.valueKmat = event;
    }
  }

  confirmFilter() {
    this.loadJournalItems();
  }

  customSelectKmat({ title }: { title: string }): string {
    return title ? `${title}` : '';
  }

  loadJournalFilterItems() {
    this.optionsKmat = [
      { title: '' },
      { title: '201912190933' },
      { title: '11114' }
    ];
  }

  loadJournalItems() {
    debugger;
    Vue.axios.get(this.generateUrl).then((response) => {
    // httpMockService.getMockJournalDelay().then((response) => {
      this.itemsJournalFiltered = response.data;
      console.log(this.itemsJournalFiltered);
    }, (error) => {
      console.log('error ', error);
    }).finally(() => {
      console.log('finally');
    });
  }

  logoutClick() {
  // this.$store.dispatch("logoutUser");
    this.logoutUser();
  }
}
</script>

<style scoped lang="scss">
</style>
