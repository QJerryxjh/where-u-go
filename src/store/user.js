import { setToken, getToken, removeToken } from '@utils/token'

export const user = {
  state: {
    token: getToken()
  },
  mutations: {
    login(state, userInfo) {
      Object.assign(state, userInfo)
      setToken(user.token)
    },
    removeToken(state) {
      state.token = ''
      removeToken()
    },
    setNewToken(state, userInfo) {
      Object.assign(state, userInfo)
      setToken(userInfo.token)
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
    }
  }
}
