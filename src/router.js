import vue from 'vue'
import Router from 'vue-router'
import wrap from './pages/wrap.vue'
import register from './pages/register'
import login from './pages/login'
import resetPwd from './pages/resetPwd'

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
    },
    {
      path: '/resetPwd',
      component: resetPwd
    }
  ]
})

export default router
