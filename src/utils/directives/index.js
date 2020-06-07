import ifMobile from './ifMobile'
import ifEventUnself from './ifEventUnself'
import ifResize from './ifResize'
export default {
  install (Vue) {
    Vue.directive('ifMobile', ifMobile)
    Vue.directive('ifEventUnself', ifEventUnself)
    Vue.directive('ifResize', ifResize)
  }
}
