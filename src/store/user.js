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
    setNewToken(state, { token, user_email }) {
      state.token = token
      state.user_email = user_email
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
    setNewToken({ commit }, { token, user_email }) {
      commit('setNewToken', { token, user_email })
    }
  }
}
