<template>
  <div class='resetPwdWrap'>
    <h1 class='resetPwdTitle'>更改密码</h1>
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
        v-model="emailCode"
        required
        label="邮箱验证码"
        placeholder="请输入验证码"
        :error-message="emailCode_error"
        @keydown.enter="handleSubmit"
      >
        <van-button
          @click='handleEmailCode'
          :disabled="disabled"
          slot="button"
          size="small"
          type="primary">
          {{ this.codeBtn }}
        </van-button>
      </van-field>
      <van-field
        v-model='password'
        type='password'
        label='新密码'
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
    >确认更改</van-button>
    <van-button to='/login' size='large' plain type="default">去登录</van-button>
  </div>
</template>

<script>
import { resetPwd, getEmailCode } from '@api/user'

export default {
  data() {
    return {
      email: '',
      password: '',
      pwd_error: '',
      email_error: '',
      emailCode: '',
      emailCode_error: '',
      codeBtn: '发送验证码',
      disabled: false
    }
  },
  methods: {
    handleEmailCode() {
      const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (!reg.test(this.email)) {
        this.email_error = '邮箱格式不合法'
        return
      } else {
        this.email_error = ''
      }

      this.codeBtn = '已发送'
      this.disabled = true

      getEmailCode({ user_email: this.email })
    },
    async handleSubmit() {
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
      } else {
        this.pwd_error = ''
      }

      if (this.emailCode === '') {
        this.emailCode_error = '验证码为空'
        return
      }

      try {
        const res = await resetPwd({
          user_email: this.email,
          user_pwd: this.password,
          user_emailCode: this.emailCode
        })

        const data = res.data
        if (data.code === 200) {
          this.$toast.success('更改密码成功')
          this.$router.push('/login')
        } else if (data.code === 401 || data.code === 409) {
          this.$toast.fail(data.msg)
        }
      } catch (e) {
        this.$toast.fail('更改失败')
        console.log(e)
      }
    }
  }
}
</script>

<style lang='less'>
  .resetPwdWrap {
    padding: 0 24px;
    .resetPwdTitle, .resetPwdTip {
      text-align: center;
    }
  }
</style>
