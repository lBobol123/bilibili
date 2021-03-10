<template>
  <div class="login_buuton">{{text}}</div>
</template>

<script>
export default {
  components: {
  },
  props: ['text'],
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .login_buuton {
    height: 50px;
    background: #ff9db5;
    margin: 20px 10px;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
  }
</style>
