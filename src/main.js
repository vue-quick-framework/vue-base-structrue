import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import api from './utils/api'
import directives from './utils/directives'
import filters from './utils/filters'

Vue.config.productionTip = false

Vue.use(api)
Vue.use(directives)
Vue.use(filters)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
