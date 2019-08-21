import { setToken, getToken } from '../utils/token'

export const user = {
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
