<template>
  <div class='userInfoCard'>
    <avatar class='avatar' />
    <userName />
    <idAndOther />
    <div class='introduction'>{{ '这个人很懒，什么也没有留下' }}</div>
  </div>
</template>

<script>
import avatar from '@pages/home/components/avatar'
import idAndOther from '@pages/home/components/idAndOther'
import userName from '@pages/home/components/userName'

export default {
  components: {
    avatar,
    idAndOther,
    userName
  }
}
</script>

<style lang="less" scoped>
  .userInfoCard {
    padding: 0 10px;
    .avatar {
      margin-left: 5px;
    }
    .introduction {
      font-size: 12px;
      line-height: 32px;
      color: #DCDCDC;
    }
  }
</style>
