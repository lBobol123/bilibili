<template>
  <div class="edit_back">
    <div class="back_home" @click="$router.push('/home')">返回首页</div>
    <div class="back_user" @click="$router.push('/userinfo')">返回个人中心</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .edit_back {
    display: flex;
    margin: 20px 10px;
  }
  .back_user,
  .back_home {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #fb7299;
    color: #fff;
    margin: 0 10px;
    border-radius: 25px;
  }
</style>
