<template>
    <img v-if='avatar === "default"' src="@assets/images/avatar.jpeg" class="avatar">
    <img v-else :src="avatar" class="avatar">
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    avatar: state => state.user.user_avatar
  })
}
</script>

<style lang="less" scoped>
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>
