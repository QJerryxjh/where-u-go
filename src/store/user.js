import { setToken, getToken, removeToken } from '@utils/token'

export const user = {
  state: {
    token: getToken()
  },
  mutations: {
    login(state, userInfo) {
      Object.assign(state, userInfo)
      setToken(userInfo.token)
    },
    removeToken(state) {
      state.token = ''
      removeToken()
    },
    setNewToken(state, userInfo) {
      Object.assign(state, userInfo)
      setToken(userInfo.token)
    },
    logout(state) {
      Object.assign(state, {
        token: '',
        user_name: '',
        user_email: '',
        user_gender: '',
        user_avatar: '',
        user_age: ''
      })
      removeToken()
    }
  },
  actions: {
    login({ commit }, userInfo) {
      commit('login', userInfo)
    },
    removeToken({ commit }) {
      commit('removeToken')
    },
    setNewToken({ commit }, userInfo) {
      commit('setNewToken', userInfo)
    },
    logout({ commit }) {
      commit('logout')
    }
  }
}
