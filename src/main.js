import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store/index.js';

import './assets/scss/style.scss';
import './filters';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
