import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rejuvenation-complex-cream',
    name: 'RejuvenationComplexCream',
    component: () => import('../views/RejuvenationComplexCream.vue')
  },
  {
    path: '/deep-perfecting-face-and-neck-serum',
    name: 'DeepPerfectingSerum',
    component: () => import('../views/DeepPerfectingSerum.vue')
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import('../views/Test.vue')
  // },
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
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: '/shipping-and-delivery',
    name: 'shippinganddelivery',
    component: () => import('../views/ShippingAndDelivery.vue'),
  },
  {
    path: '/contact-us',
    name: 'contactus',
    component: () => import('../views/ContactUs.vue'),
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
  if( document.querySelector('.nav-active') ){
    document.querySelector('.nav').classList.remove('nav-active')
  }
})

export default router;
