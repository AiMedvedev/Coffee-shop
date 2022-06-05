import Vue from 'vue';
import Vuex from 'vuex';

import links from './links';
import cards from './cards';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links, cards
  }
})

export default store;