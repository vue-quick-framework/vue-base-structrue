import ifMobile from './ifMobile'
export default {
  install (Vue) {
    Vue.directive('ifMobile', ifMobile)
  }
}
