import { setToken, getToken } from '../utils/token'

export const user = {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    login(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    login({ commit }, { token }) {
      commit('login', token)
    }
  }
}
