<template>
  <div class='userCardWrap'>
    <van-nav-bar
      left-arrow
      :border='false'
      @click-left='handleClickLeft'
      @click-right='handleClickRight'
    >
      <van-icon name="edit" slot="right" />
    </van-nav-bar>
    <div class='swipWrap'>
      <van-swipe class='swipCom' :autoplay="3000" :height='200' :show-indicators='false'>
        <van-swipe-item class='uploadImgTip'>添加图片展示自己</van-swipe-item>
      </van-swipe>
      <userInfoCard class='userInfoCard' />
    </div>
  </div>
</template>

<script>
import userInfoCard from './components/userInfoCard'

export default {
  components: {
    userInfoCard
  },
  data() {
    return {

    }
  },
  methods: {
    handleClickLeft() {
      this.$router.push('/home/myInfo')
    },
    handleClickRight() {
      console.log('click right')
    }
  }
}
</script>

<style lang="less" scoped>
  .userCardWrap {
    height: 100%;
    position: relative;
    .van-nav-bar {
      background-color: rgba(0, 0, 0, .4);
      height: 32px;
      line-height: 32px;
      .van-icon {
        color: #fff!important;
      }
    }
    .swipWrap {
      position: absolute;
      top: 0;
      width: 100%;
      .swipCom {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .4);
        }
        .uploadImgTip {
          text-align: center;
          line-height: 120px;
          font-size: 16px;
          padding-left: 20px;
          color: #DCDCDC;
        }
      }
      .userInfoCard {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
</style>
