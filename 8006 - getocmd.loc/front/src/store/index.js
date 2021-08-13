import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    campaignId: false,
    cart: false,
    upsell: false,
    downsell: false,
    crosssell: false,
    orderId: false,
    loader: false,
    payment: 'cc',
    product_type: false,
    mode: 'live'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
