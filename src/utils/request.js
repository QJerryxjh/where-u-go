import axios from 'axios'
import store from '../store'
import router from '../router'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api',
  timeout: 1000 * 60,
  validateStatus(status) {
    return (status >= 200 && status <= 300) || status === 304
  }
})

service.interceptors.request.use(config => {
  const token = store.state.user.token

  if (token) {
    config.headers['X-token'] = token
  }
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  return res
}, err => {
  const { response } = err
  if (response !== null) {
    if (response.status === 401) {
      Toast.fail(response.data || '请重新登录')
      store.dispatch('removeToken')
      router.push('/login')
      return Promise.reject(err)
    }
  } else {
    console.log(err)
  }
})

export const get = service.get
export const post = service.post
