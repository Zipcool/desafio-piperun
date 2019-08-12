import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import moment from 'moment'

import router from './routes'
import store from './store/store'

Vue.use(VueResource);
Vue.http.options.root = 'https://api.pipe.run/v1/';

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm:ss')
  };
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
