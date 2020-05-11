import date from './date'
export default {
  install (Vue) {
    Vue.filter('date', date())
  }
}
