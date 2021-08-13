import Vue from 'vue';
import VueRouter from 'vue-router';
import Campaign_4 from '../views/Campaign_4.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/checkout',
    name: 'сheckout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/thank-you',
    name: 'thankyou',
    component: () => import('../views/ThankYou.vue'),
  },
  {
    path: '/',
    name: 'campaign-4',
    component: Campaign_4
  },
  {
    path: '/v2',
    name: 'campaign-5',
    component: () => import('../views/Campaign_5.vue'),
  },
  // {
  //   path: '/test',
  //   name: 'campaign-9',
  //   component: () => import('../views/Campaign_9.vue')
  // },
  {
    path: '/paypal',
    name: 'paypal',
    component: () => import('../views/Paypal.vue'),
  },
  {
    path: '/3-jars-drc-upsell',
    name: 'sellingOne',
    component: () => import('../views/3_jars_drc_upsell.vue')
  },
  {
    path: '/1-jar-drc-downsell',
    name: 'sellingTwo',
    component: () => import('../views/1_jar_drc_downsell.vue')
  },
  {
    path: '/6-jars-drc-upsell',
    name: 'sellingThree',
    component: () => import('../views/6_jars_drc_upsell.vue')
  },
  {
    path: '/3-jars-drc-downsell',
    name: 'sellingFor',
    component: () => import('../views/3_jars_drc_downsell.vue')
  },
  {
    path: '/1-2-3-deep-perfecting-cerum-cross-sell',
    name: 'sellingFive',
    component: () => import('../views/1_2_3_deep_perfecting_cerum_cross_sell.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from) => {
  document.getElementById('app').classList = to.name;
})

export default router;
