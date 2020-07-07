import cusAxios from './axios'
import axios from 'axios'

const api = {
  // 登录
  login (data) { return cusAxios.post('/api/login', data) },
  // 获取登录信息
  getLoginInfo (params) { return cusAxios.get('/api/login/info', { params }) }
}

export default {
  install (Vue) {
    Vue.prototype.api = api
    Vue.prototype.cusAxios = cusAxios
    Vue.prototype.axios = axios
  }
}
