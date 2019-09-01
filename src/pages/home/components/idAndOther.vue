<template>
  <div class='idWrap'>
    <div class='id'>ID:{{ id }}</div>
    <div class="genderAndAge">
      <i class='iconfont' style='float: left; margin-right: 5px'>{{ gender === 'female' ? '&#xe891;' : gender === 'male' ? '&#xe77d;' : '&#xe613;' }}</i>
      <span>{{ age === undefined ? '年龄未知' : age + '岁' }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    id: state => state.user.user_email,
    gender: state => state.user.user_gender,
    age: state => state.user.user_age
  })
}
</script>

<style lang="less" scoped>
  .idWrap {
    overflow: hidden;
    .id {
      float: left;
      background: #00bfff;
      font-size: 12px;
      line-height: 16px;
      padding: 2px 4px;
      color: #fff;
      border-radius: 10px;
      transform: scale(.9);
    }
    .genderAndAge {
      float: left;
      background: #FF7F50;
      font-size: 12px;
      line-height: 16px;
      padding: 2px 4px;
      color: #fff;
      border-radius: 10px;
      margin-left: 8px;
      transform: scale(.9);
    }
  }
</style>
