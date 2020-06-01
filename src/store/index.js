import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
import app from './modules/app'
Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    // state 持久化，防止f5刷新，导致数据消失
    plugins: [createPersistedState({
      storage: window.localStorage,
      reducer (val) {
        return {
          // 只保存module user内部所有变量持久化
          user: val.user
        }
      }
    })],
    state: {},
    mutations: {},
    actions: {},
    modules: {
      app,
      user
    }
  })
}
