<template>
  <div class='userCardWrap'>
    <van-nav-bar
      left-arrow
      :border='false'
      fixed
      @click-left='handleClickLeft'
      @click-right='handleClickRight'
    >
      <van-icon name="edit" slot="right" />
    </van-nav-bar>
    <div class='swipWrap'>
      <van-swipe class='swipCom' :autoplay="3000" :height='220' :show-indicators='false'>
        <van-swipe-item class='uploadImgTip'>添加图片展示自己</van-swipe-item>
      </van-swipe>
      <userInfoCard class='userInfoCard' />
    </div>
    <van-tabs v-model="active" animated swipeable>
      <van-tab title='我的记录' name='我的记录'>
        <van-skeleton
          title
          avatar
          :row="3"
          :loading="loading"
        >
          <div>实际内容</div>
        </van-skeleton>
        <van-skeleton
          title
          avatar
          :row="3"
          :loading="loading"
        >
          <div>实际内容</div>
        </van-skeleton>
        <van-skeleton
          title
          avatar
          :row="3"
          :loading="loading"
        >
          <div>实际内容</div>
        </van-skeleton>
      </van-tab>
      <van-tab title='总览' name='总览'>
        总览
      </van-tab>
    </van-tabs>
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
      active: '我的记录'
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
      width: 100%;
      .van-icon {
        color: #fff!important;
      }
    }
    .swipWrap {
      position: relative;
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
