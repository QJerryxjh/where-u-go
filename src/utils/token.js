import store from 'store'
console.log(store)

const TOKEN = 'token'

export function getToken() {
  return store.get(TOKEN)
}

export function setToken(token) {
  store.set(TOKEN, token)
}

export function removeToken() {
  store.remove(TOKEN)
}
