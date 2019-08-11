import vue from 'vue'
import wrap from './pages/wrap.vue'
import register from './pages/register'
import login from './pages/login'
import Router from 'vue-router'

vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: wrap
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    }
  ]
})

export default router