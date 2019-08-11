<template>
  <div class='progressWrap'>
    <van-circle v-model='modelProgressData' :rate="progressRate" :speed='20' :text='`${progressLeft}天`'/>
  </div>
</template>
<script>
export default {
  props: ['progressLeft'],
  data() {
    return {
      now: new Date().getTime(),
      subjectiveTime: new Date('2019/10/20'),
      modelProgressData: 0,
      progressRate: Math.floor((210 - this.progressLeft) * 100 / 210)
    }
  }
}
</script>
<style lang="less">
  .progressWrap {
    float: left;
  }
</style>