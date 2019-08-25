import vue from 'vue'
import Router from 'vue-router'
import left from '../pages/left'
import register from '../pages/userState/register'
import login from '../pages/userState/login'
import resetPwd from '../pages/userState/resetPwd'
import home from '../pages/home'

vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'index',
          component: left
        }
      ]
    },
    {
      path: '/left',
      component: left
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
