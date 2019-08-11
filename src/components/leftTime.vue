<template>
  <div>
    <van-notice-bar
      background='#43CD80'
      color='rgba(0,0,0,.8)'
      :text="noticeText"
    />
    <div class='tipInfo'>
      <Progress :progressLeft='Math.floor((this.subjectiveTime - this.now) / 1000 / 60 / 60 / 24)'></Progress>
      <weather></weather>
    </div>
  </div>
</template>
<script>
import Progress from './progress'
import weather from './weather'
export default {
  components: {
    Progress,
    weather
  },
  data() {
    return {
      now: new Date().getTime(),
      subjectiveTime: new Date('2019/10/20'),
      objectiveTime: new Date('2019/8/31')
    }
  },
  mounted() {
    setInterval(() => {
      this.now = new Date().getTime().toString()
    }, 60000)
  },
  computed: {
    noticeText() {
      return `客观：${Math.floor((this.objectiveTime - this.now) / 1000 / 60 / 60 / 24)}天；主观：${Math.floor((this.subjectiveTime - this.now) / 1000 / 60 / 60 / 24)}天`
    },
  }
}
</script>
<style lang="less">
  .tipInfo {
    padding: 0 30px;
    overflow: hidden;
  }
</style>