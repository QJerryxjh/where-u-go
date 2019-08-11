import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const store = new vuex.Store({
  state: {
    name: 'qje'
  },
  mutations: {},
  actions: {},
  strict: process.env.NODE_ENV !== 'production'
})

export default store
