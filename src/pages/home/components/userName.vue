<template>
  <div class='userName'>{{ name }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    name: state => state.user.user_name
  })
}
</script>

<style lang="less" scoped>
  .userName {
    width: 180px;
    font-size: 24px;
    color: #555;
    padding: 2px;
    line-height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
