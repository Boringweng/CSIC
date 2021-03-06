// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import D3Network from 'vue-d3-network'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex'
import axios from 'axios'
import VCharts from 'v-charts'
// import VueAxios from 'vue-axios'

// import Vueresource from 'vue-resource'
Vue.use(VCharts);
Vue.use(iView);
Vue.config.productionTip = false
Vue.use(Vuex);
// Vue.use(VueAxios);
// Vue.use(axios);
Vue.prototype.$http = axios
  
// Vue.use(Vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
