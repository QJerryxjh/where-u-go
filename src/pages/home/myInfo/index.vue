<template>
  <div>
    <van-nav-bar title="个人中心" @click-right="handleClickPlus">
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <userInfoShow />
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

    }
  },
  methods: {
    handleClickPlus() {
      console.log('点击了加号')
    }
  }
}
</script>

<style lang='less'>

</style>
