<template>
  <div class="login">
    <login-top topTitle="登录bilibili" operation="用户注册"
               @operationClick="$router.push('/register')" />
    <login-text style="margin: 4.267vw 0" label="账号"
                placeholder="请输入账号"
                @contentRule="res => model.username = res" />
    <login-text style="margin: 4.267vw 0" label="密码"
                placeholder="请输入密码" type="password"
                @contentRule="res => model.password = res" />
    <login-button text="登录" @click.native="loginClick"/>
  </div>
</template>

<script>
import LoginTop from '@/components/content/login/LoginTop'
import LoginText from '@/components/content/login/LoginText'
import LoginButton from '@/components/content/login/LoginButton'

export default {
  components: {
    LoginTop,
    LoginText,
    LoginButton
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async loginClick () {
      if (this.model.username && this.model.password) {
        const res = await this.$http.post('/login', this.model)
        console.log(res)
        if (res.data.code === 200) {
          this.$msg.success(res.data.msg)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.token)
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)
        } else {
          this.$msg.fail(res.data.msg)
        }
      }
    }
  }
}

</script>
<style scoped>

</style>
