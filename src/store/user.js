import { setToken, getToken, removeToken } from '@utils/token'

export const user = {
  state: {
    token: getToken()
  },
  mutations: {
    login(state, token) {
      state.token = token
      setToken(token)
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
    login({ commit }, { token }) {
      commit('login', token)
    },
    removeToken({ commit }) {
      commit('removeToken')
    },
    setNewToken({ commit }, userInfo) {
      commit('setNewToken', userInfo)
    }
  }
}
