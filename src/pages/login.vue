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
      />
      <van-field
        v-model='password'
        type='password'
        label='密码'
        placeholder='请输入密码'
        required
        :error-message='pwd_error'
      />
    </van-cell-group>
    <van-button
      type='info'
      size='large'
      style='margin-top: 20px;'
      @click='handleSubmit'
    >登录</van-button>
  </div>
</template>
<script>
import axios from 'axios'
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
    handleSubmit() {
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

      axios
        .post('http://localhost:3000/api/login', {
          user_email: this.email,
          user_pwd: this.password
        })
        .then(res => {
          const data = res.data
          if (data.code === 200) {
            this.$router.push('/')
          } else if (data.code === 401) {
            this.email_error = data.msg
          }
        })
        .catch(err => {
          console.log(err)
        })
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
}
</style>
