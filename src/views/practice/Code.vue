<template>
  <div>
    <div class="get_code">
      <input v-model="telephone" type="text" placeholder="手机号">
      <span v-if="isShowCode" :class="[{ phone_true: phoneRight }, 'code']" @click="codeClick">获取验证码</span>
      <span v-else class="code">已发送({{countDown}})s</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      telephone: '',
      isShowCode: true,
      countDown: 6
    }
  },
  computed: {
    phoneRight () {
      const rulg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      return rulg.test(this.telephone)
    }
  },
  methods: {
    codeClick () {
      if (this.phoneRight) {
        this.isShowCode = false
      }
      const timer = setInterval(() => {
        this.countDown--
        if (this.countDown <= 0) {
          clearInterval(timer)
          this.isShowCode = true
          this.countDown = 6
        }
      }, 1000)
    }
  }
}

</script>
<style scoped>
  .get_code {
    position: relative;
    margin: 10px;
  }
  input {
    width: 260px;
    padding: 8px 12px;
    border: 1px solid #dededd;
    border-radius: 3px;
    font-size: 15px;
  }
  .code {
    position: absolute;
    top: 7px;
    right: 88px;
    color: rgb(168, 167, 167);
    font-size: 15px;
  }
  .phone_true {
    color: #000;
  }
</style>
