<template>
  <div id="app">
    <router-view v-if='!loadUserInfo'></router-view>
  </div>
</template>

<script>
import { checkToken } from '@api/user'

export default {
  name: 'app',
  data() {
    return {
      loadUserInfo: true
    }
  },
  async mounted() {
    try {
      const res = await checkToken()
      if (res.data.code === 200) {
        const { user_email, user_name, user_avatar, user_gender, token } = res.data
        this.$store.dispatch('setNewToken', {
          token,
          user_email,
          user_name,
          user_avatar,
          user_gender
        })
      }
    } catch (err) {
      console.log(err)
      this.$router.push('/login')
      this.$store.dispatch('removeToken')
    }
    this.loadUserInfo = false
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
