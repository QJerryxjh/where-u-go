import { setToken, getToken, removeToken } from '../utils/token'

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
    setNewToken(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    login({ commit }, { token }) {
      commit('login', token)
    },
    removeToken({ commit }) {
      commit('removeToken')
    },
    setNewToken({ commit }, { token }) {
      commit('setNewToken', token)
    }
  }
}
