import home from '@pages/home'
import left from '@pages/left'
import myInfo from '@pages/home/myInfo'
import friends from '@pages/home/friends'

export default {
  path: '/home',
  component: home,
  children: [
    {
      path: 'index',
      name: 'index',
      component: left
    },
    {
      path: 'myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: 'friends',
      name: 'friends',
      component: friends
    }
  ]
}
