import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
