<template>
  <router-link to='/login'>
    <div class='userInfoShow'>
      <div class='userName'>{{ user.name }}</div>
      <div class='idWrap'>
        <div class='id'>ID:{{ user.id }}</div>
        <div class="genderAndAge">
          <i class='iconfont' style='float: left;'>{{ user.gender === 'female' ? '&#xe891;' : user.gender === 'male' ? '&#xe77d;' : '&#xe613;' }}</i>
          <span>{{ user.age + '岁' }}</span>
        </div>
      </div>
      <div class="personalHomePage">
        <span class='personal'>个人主页</span><i class='iconfont'>&#xe625;</i>
      </div>
      <img src="../../../../assets/images/avatar.jpeg" class="avatar">
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Wwwwwwwwwwwwwwwwwwwwwwwwwww',
        id: 'Ww2ww.com',
        age: '22'
      }
    }
  }
}
</script>

<style lang='less'>
  .userInfoShow {
    position: relative;
    padding: 10px 12px;
    overflow: hidden;
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
    .personalHomePage {
      float: left;
      padding: 10px 4px;
      font-size: 14px;
      color: #555;
      line-height: 22px;
      font-size: 12px;
      .iconfont {
        font-size: 12px;
        padding-left: 8px;
      }
    }
    .avatar {
      position: absolute;
      width: 60px;
      height: 60px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
  }
</style>
