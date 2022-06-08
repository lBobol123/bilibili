<template>
  <div class="header_wrapper">
    <div class="title">后台管理系统</div>
    <button class="log_out" @click="logoutClick">退出登录</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    logoutClick () {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
        this.$router.replace('/backstageLogin')
      }
    }
  }
}

</script>
<style scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 2px solid #f4f4f4;
}
.title {
  font-size: 22px;
}
.log_out {
  background-color: #ffffff;
  border: .5px solid #f4f4f4;
}
</style>
