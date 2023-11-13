import Vue from 'vue';
import Vuex from 'vuex';

import links from './links.js';
import bestsellers from './bestsellers.js';
import coffee from './coffee.js';
import goods from './goods.js';
import isLoading from './isLoading.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links, bestsellers, coffee, goods, isLoading
  }
})

export default store;
