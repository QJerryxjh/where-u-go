<template>
  <div class='weatherWrap'>
    <span v-if='tomorrowWeather' class="iconfont weather">&#xe60a;</span>
    <span v-else class="iconfont weather">&#xe603;</span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      localWeather: [],
      tomorrowWeather: true
    }
  },
  async beforeCreate() {
    const res = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=321202&key=cd5332052afc0d8f322b1fb9711da84d&extensions=all')
    this.localWeather = res.data.forecasts[0].casts
    if (this.localWeather[1].dayweather.indexOf('雨') > -1) {
      this.tomorrowWeather = false
    }
  }
}
</script>
<style lang="less">
  .weatherWrap {
    float: right;
    .weather {
      &.iconfont {
        font-size: 32px;
        padding-right: 30px;
        line-height: 100px;
        color: #BEBEBE;
      }
    }
  }
</style>