<template>
  <div class='myInfo'>
    <van-nav-bar title="个人中心" @click-right="handleClickPlus">
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <router-link to='/userCard'>
      <userInfoShow />
    </router-link>
    <van-cell title="我的记录" is-link @click='handleLogoutClick'/>
    <van-cell title="我赞过的" is-link @click='handleLogoutClick'/>
    <van-cell title="我的收藏" is-link @click='handleLogoutClick'/>
    <van-cell title="退出登录" is-link @click='handleLogoutClick'/>
    <van-action-sheet
      v-model="showLogoutSheet"
      :actions="logoutActions"
      cancel-text="取消"
      @select="logout"
    />
  </div>
</template>

<script>
import userInfoShow from './components/userInfoShow'

export default {
  components: {
    userInfoShow
  },
  data() {
    return {
      themeModel: false,
      showLogoutSheet: false,
      logoutActions: [
        { name: '退出登录', color: '#EE2C2C' }
      ]
    }
  },
  methods: {
    handleClickPlus() {
      console.log('点击了加号')
    },
    handleLogoutClick() {
      this.showLogoutSheet = true
    },
    logout() {
      // 退出登录，删除token，清除vuex中用户信息
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='less'>
  .myInfo {
    .van-cell {
      margin-bottom: 5px;
    }
  }
</style>
