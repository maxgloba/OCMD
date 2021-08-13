import hyros from './assets/js/hyros.js'
import fb from './assets/js/fb.js'
import google_script from './assets/js/google.js'
import klaviyo from './assets/js/klaviyo.js'

import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  metaInfo() {
    return {
      title: "OCMD",
      // titleTemplate: '%s | OCMD',
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: require('@/assets/img/favicon.png')
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'description copy'
        },
        {
          name: 'keywords',
          content: 'keywords, list'
        },
        {
          name: 'copyright',
          content: '2021 copyright website. All rights reserved.'
        },
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
        },
        {
          name: 'author',
          content: 'MaxGloba'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]
    }
  },
  render: (h) => h(App),
}).$mount('#app');
