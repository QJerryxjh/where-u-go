<template>
  <div class='userInfoShow'>
    <userName />
    <idAndOther />
    <personalHomePage />
    <avatar class='avatar' />
  </div>
</template>

<script>
import userName from '@pages/home/components/userName'
import idAndOther from '@pages/home/components/idAndOther'
import personalHomePage from '@pages/home/components/personalHomePage'
import avatar from '@pages/home/components/avatar'

export default {
  components: {
    userName,
    idAndOther,
    personalHomePage,
    avatar
  },
  data() {
    return {}
  }
}
</script>

<style lang='less' scoped>
  .userInfoShow {
    position: relative;
    padding: 10px 12px;
    overflow: hidden;
    background-color: #fff;
    margin: 10px 0;
    .avatar {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
