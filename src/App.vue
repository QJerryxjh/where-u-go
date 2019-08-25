<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { checkToken } from './api/user'

export default {
  name: 'app',
  async mounted() {
    try {
      await checkToken()
    } catch (err) {
      console.log(err)
      this.$toast.fail('登录状态失效，请重新')
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
