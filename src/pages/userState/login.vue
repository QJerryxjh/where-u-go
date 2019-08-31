<template>
  <div class='loginWrap'>
    <h1 class='loginTitle'>登录</h1>
    <van-cell-group>
      <van-field
        v-model='email'
        required
        label='邮箱'
        placeholder='请输入邮箱'
        :error-message='email_error'
        @keydown.enter="handleSubmit"
      />
      <van-field
        v-model='password'
        type='password'
        label='密码'
        placeholder='请输入密码'
        required
        :error-message='pwd_error'
        @keydown.enter="handleSubmit"
      />
    </van-cell-group>
    <van-button
      type='info'
      size='large'
      style='margin: 20px 0 5px;'
      @click='handleSubmit'
    >登录</van-button>
    <van-button to='/register' size='large' plain type="default">去注册</van-button>
    <div class='resetPwd'><router-link to='resetPwd'>忘记密码？</router-link></div>
  </div>
</template>
<script>
import { login } from '@api/user'
export default {
  data() {
    return {
      email: '',
      password: '',
      email_error: '',
      pwd_error: ''
    }
  },
  methods: {
    async handleSubmit() {
      const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (!reg.test(this.email)) {
        this.email_error = '邮箱格式不合法'
        return
      } else {
        this.email_error = ''
      }

      if (this.password.length < 5) {
        this.pwd_error = '密码错误'
        return
      } else {
        this.pwd_error = ''
      }

      try {
        const res = await login({
          user_email: this.email,
          user_pwd: this.password
        })

        const data = res.data
        if (data.code === 200) {
          this.$toast.success('登录成功')
          this.$store.dispatch('login', { token: data.data.token })
          this.$router.push('/')
        } else if (data.code === 401) {
          this.$toast.fail(data.msg)
        }
      } catch (e) {
        this.$toast.fail('登录失败')
        console.log(e)
      }
    }
  }
}
</script>
<style lang='less'>
.loginWrap {
  padding: 0 24px;
  .loginTitle {
    text-align: center;
  }
  .resetPwd {
    text-align: right;
    font-size: 16px;
    a {
      color: #1E90FF;
    }
  }
}
</style>
