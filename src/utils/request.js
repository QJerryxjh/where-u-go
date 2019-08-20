import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000 * 60,
  validateStatus(status) {
    return status >= 200
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
  return Promise.reject(err)
})

export const get = service.get
export const post = service.post
