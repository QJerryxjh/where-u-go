import { post } from '../utils/request'

export const login = (params) => {
  return post('/login', params)
}

export const register = (params) => {
  return post('/register', params)
}
