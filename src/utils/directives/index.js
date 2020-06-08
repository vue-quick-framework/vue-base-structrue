import ifMobile from './ifMobile'
import ifEventUnself from './ifEventUnself'
import ifResize from './ifResize'
import fixElSelectFilterable from './element-ui/fixElSelectFilterable'
export default {
  install (Vue) {
    Vue.directive('ifMobile', ifMobile)
    Vue.directive('ifEventUnself', ifEventUnself)
    Vue.directive('ifResize', ifResize)
    Vue.directive('fixElSelectFilterable', fixElSelectFilterable)
  }
}
