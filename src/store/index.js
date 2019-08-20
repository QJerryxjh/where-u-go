import vuex from 'vuex'
import vue from 'vue'
import { user } from './user'

vue.use(vuex)

const store = new vuex.Store({
  modules: {
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
