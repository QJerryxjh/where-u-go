import home from '../pages/home'
import left from '../pages/left'

export default {
  path: '/home',
  component: home,
  children: [
    {
      path: 'index',
      component: left
    }
  ]
}
