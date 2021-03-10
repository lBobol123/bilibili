<template>
  <div id="register">
    <login-top topTitle="注册bilibili" operation="用户登录"
               @operationClick="$router.push('/login')" />
    <login-text style="margin: 4.267vw 0"
                label="姓名" placeholder="请输入姓名"
                @contentRule="res => model.name = res" />
    <login-text label="账号" placeholder="请输入账号"
                @contentRule="res => model.username = res" />
    <login-text label="密码" placeholder="请输入密码"
                type="password"
                @contentRule="res => model.password = res" />
    <login-button text="注册" @click.native="btnClick"></login-button>
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
  watch: {
  },
  methods: {
    async btnClick () {
      const rule = /^.{6,16}$/
      if (rule.test(this.model.name) && rule.test(this.model.username) && rule.test(this.model.password) && Object.keys(this.model).length !== 0) {
        const res = await this.$http.post('/register', this.model)
        console.log(res)
        if (res.data.code === 302) {
          this.$msg.fail(res.data.msg)
        } else {
          this.$msg.success(res.data.msg)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.objtoken)
          setTimeout(() => {
            this.$router.push('/userinfo')
          }, 1000)
        }
      } else {
        this.$msg.fail('请输入6-16字符')
      }
    }
  }
}

</script>
<style scoped>
</style>
