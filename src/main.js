import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

import router from './routes'
import store from './store/store'

Vue.use(VueResource);
Vue.http.options.root = 'https://api.pipe.run/v1/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
