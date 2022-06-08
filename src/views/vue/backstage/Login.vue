<template>
  <div class="bgc">
    <div class="login_wrapper">
      <input class="login_input" v-model.trim="loginInfo.username" type="text" placeholder="请输入用户名">
      <input class="login_input" v-model.trim="loginInfo.password" type="password" placeholder="请输入密码">
      <div class="login_btn" @click="loginClick">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackStageLogin',
  components: {
  },
  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginClick () {
      const { username, password } = this.loginInfo
      if (username === 'admin' && password === '666666') {
        localStorage.setItem('token', JSON.stringify(this.loginInfo))
        this.$router.push('/backstageHome')
      } else {
        localStorage.removeItem('token')
        alert('用户名admin 密码666666')
      }
    }
  }
}

</script>
<style scoped>
.bgc {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image:linear-gradient(94.3deg, rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1%);
  overflow: hidden;
}
.bgc::before {
  position: absolute;
  content: "";
  width: 350px;
  height: 350px;
  top: 12%;
  left: 22%;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}
.bgc::after{
  position: absolute;
  content: "";
  width: 200px;
  height: 200px;
  top: 55%;
  left: 55%;
  background-image: linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
.login_wrapper {
  position: relative;
  z-index: 3;
  width: 320px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 45px 50px;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
  border: 1px solid rgba(255, 255, 255, .2);
  border-right: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  backdrop-filter: blur(20px);
  box-sizing: border-box;
}
.login_input {
  width: 100%;
  margin-bottom: 15px;
  box-sizing: border-box;
  /* border-radius: 2px; */
}
.login_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100%;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
  margin-top: 15px;
  box-sizing: border-box;
  background-image: linear-gradient(135deg, #ffe53b 0%, #2bd2ff 52%, #2bff88 90%);
  border-radius: 2px;
}
</style>
