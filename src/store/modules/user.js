export default {
  namespaced: true,
  state: {
    accessToken: '',
    userInfo: null
  },
  actions: {
  },
  mutations: {
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    setAccessToken: (state, accessToken) => {
      state.accessToken = accessToken
    }
  }
}
