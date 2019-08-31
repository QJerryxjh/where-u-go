<template>
  <div class='registerWrap'>
    <h1 class='registerTitle'>用户注册</h1>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        label="用户名"
        placeholder="请输入用户名"
        :error-message="name_error"
        @keydown.enter="handleSubmit"
      />

      <van-field
        v-model="email"
        required
        label="邮箱"
        placeholder="请输入邮箱"
        :error-message="email_error"
        @keydown.enter="handleSubmit"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="pwd_error"
        @keydown.enter="handleSubmit"
      />
      <van-field
        v-model="confirmPassword"
        type="password"
        label="确认密码"
        placeholder="请输入密码"
        required
        @keydown.enter="handleSubmit"
      />
    </van-cell-group>
    <van-button
      type="info"
      size="large"
      style="margin: 20px 0 5px;"
      @click="handleSubmit"
    >注册</van-button>
    <van-button to='/login' size='large' plain type="default">去登录</van-button>
  </div>
</template>
<script>
import { register } from '@api/user'
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      name_error: '',
      pwd_error: '',
      email_error: ''
    }
  },
  methods: {
    handleNameBlur() {},
    handlePwdBlur() {},
    handleEmailBlur() {},
    async handleSubmit() {
      if (this.username.length <= 0) {
        this.name_error = '用户名不能为空'
        return
      } else {
        this.name_error = ''
      }

      const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (!reg.test(this.email)) {
        this.email_error = '邮箱格式不合法'
        return
      } else {
        this.email_error = ''
      }

      if (this.password.length < 5) {
        this.pwd_error = '密码长度不能少于5位'
        return
      } else if (this.password !== this.confirmPassword) {
        this.pwd_error = '两次输入密码不一致'
      } else {
        this.pwd_error = ''
      }

      try {
        const res = await register({
          user_name: this.username,
          user_email: this.email,
          user_pwd: this.password
        })

        if (res.data.code === 200) {
          this.$toast.success('注册成功')
          this.$router.push({ path: '/login' })
        } else if (res.data.code === 409) {
          this.$toast.fail('该邮箱已被注册')
        } else {
          this.$toast.fail(res.data.msg)
        }
      } catch (e) {
        this.$toast.fail('注册失败')
        console.log(e)
      }
    }
  }
}
</script>
<style lang="less">
.registerWrap {
  padding: 0 24px;
  .registerTitle {
    text-align: center;
  }
}
</style>
