import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import api from './utils/api'
import directives from './utils/directives'
import filters from './utils/filters'

import './assets/stylesheets/application.scss'

import i18n from './i18n'
console.log(i18n.t('hello'))

Vue.config.productionTip = false

Vue.use(api)
Vue.use(directives)
Vue.use(filters)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
