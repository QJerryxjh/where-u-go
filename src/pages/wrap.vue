<template>
  <div>
    <leftTime></leftTime>
    <van-steps
      description='today'
      direction='vertical'>
      <van-step v-for='item in todayList' :key='item.sth'>
        <h3>{{item.time}}</h3>
        <p>{{item.sth}}</p>
      </van-step>
    </van-steps>
  </div>
</template>
<script>
import leftTime from '../components/leftTime'
export default {
  components: {
    leftTime
  },
  data() {
    return {
      todayList: [{ sth: 'todo1', time: 'am' }, { sth: 'todo2', time: 'am' }, { sth: 'todo3', time: 'am' }]
    }
  }
}
</script>
<style lang='less'>

</style>
