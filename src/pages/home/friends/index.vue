
<template>
  <div>
    <van-cell-group>
      <van-field class='msg' v-model="message" placeholder="请输入用户名" />
    </van-cell-group>
    <van-button type="primary" size="large">发送</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  beforeCreate() {
    const ws = new WebSocket('ws://localhost:9090')
    console.log(ws)
  }
}
</script>

<style lang="less">
  .msg {
    border: 1px solid #eee;
    border-radius: 10px;
  }
</style>
