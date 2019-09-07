import { post, get } from '@utils/request'

export const login = (params) => {
  return post('/login', params)
}

export const register = (params) => {
  return post('/register', params)
}

export const resetPwd = (params) => {
  return post('/resetPwd', params)
}

export const checkToken = () => {
  return get('/checkToken')
}

export const getEmailCode = (params) => {
  return post('/getEmailCode', params)
}
