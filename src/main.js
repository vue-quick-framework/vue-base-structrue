import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import router from './router'
import { createRouter } from './router'
// import store from './store'
import { createStore } from './store'

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

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })
  // app.$mount('#app')
  return { app, router, store }
}
