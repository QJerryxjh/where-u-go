<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { checkToken } from '@api/user'

export default {
  name: 'app',
  async mounted() {
    try {
      const res = await checkToken()
      if (res.data.code === 200) {
        this.$store.dispatch('setNewToken', { token: res.data.token })
      }
      console.log(res.data.token)
    } catch (err) {
      console.log(err)
      this.$router.push('/login')
      this.$toast.fail('登录状态失效，请重新')
      this.$$store.dispatch('removeToken')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
