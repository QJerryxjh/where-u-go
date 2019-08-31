import vue from 'vue'
import Router from 'vue-router'
import register from '../pages/userState/register'
import login from '../pages/userState/login'
import resetPwd from '../pages/userState/resetPwd'
import home from './home'

vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
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
    },
    home
  ]
})

export default router
