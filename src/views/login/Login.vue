<template>
  <div class="login">
    <login-top topTitle="登录bilibili" operation="用户注册" @operationClick="$router.push('/register')" />
    <login-text style="margin: 4.267vw 0" label="账号" placeholder="请输入账号" @contentRule="res => model.username = res" />
    <login-text style="margin: 4.267vw 0" label="密码" placeholder="请输入密码" type="password" @contentRule="res => model.password = res" />
    <login-button text="登录" @click.native="loginClick" />
    <button @click="$router.push('/backtop')">BackTop</button>
    <input type="button" @click="$router.push('/switch')" value="Switch">
    <input type="button" @click="$router.push('/seemore')" value="SeeMore">
    <input type="button" @click="$router.push('/open')" value="Open">
    <input type="button" @click="$router.push('/echarts')" value="Echarts">
    <input type="button" @click="$router.push('/code')" value="验证码">
    <input type="button" @click="$router.push('/andOr')" value="&&||"> <br />
    <input type="button" @click="$router.push('/watch')" value="vue监听">
    <input type="button" @click="$router.push('/computed')" value="计算属性">
    <input type="button" @click="$router.push('/key')" value="key的作用及原理">
    <input type="button" @click="$router.push('/listFiltersort')" value="列表过滤 排序">
    <input type="button" @click="$router.push('/monitorData')" value="Vue监视数据的原理">
    <input type="button" @click="$router.push('/filter')" value="过滤器">
    <input type="button" @click="$router.push('/instruction')" value="自定义指令">
    <input type="button" @click="$router.push('/lifeCycle')" value="生命周期">
    <input type="button" @click="$router.push('/todoList')" value="todoList案例">
    <input type="button" @click="$router.push('/searchCase')" value="git搜索案例">
    <button @click="$router.push('/vuex')">Vuex</button>
    <button @click="$router.push('/router/about')">Router</button>
    <button @click="$router.push('/backstageLogin')">后台管理系统</button>
    <button @click="$router.push('/news')">头条新闻</button>
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
