<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to='/home/index' icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">好友</van-tabbar-item>
      <van-tabbar-item to='/home/myInfo' icon="contact" :dot='true'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  mounted() {
    const currentPath = this.$route.name
    switch (currentPath) {
      case 'index':
        this.active = 0
        break
      case 'search':
        this.active = 1
        break
      case 'friends':
        this.active = 2
        break
      case 'myInfo':
        this.active = 3
        break
      default:
        break
    }
  }
}
</script>

<style lang='less'>

</style>
