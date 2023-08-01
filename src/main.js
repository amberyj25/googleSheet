import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueLoading from 'vue-loading-overlay';

Vue.component('VueLoading', VueLoading)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
