<template>
  <div class="list">
    <div v-show="info.userList.length" class="list_item" v-for="item in info.userList" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" alt="">
      </a>
      <div>{{item.login}}</div>
    </div>
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <h1 v-show="info.isLoading">加载中。。。</h1>
    <h1 v-show="info.errMsg">请求错误:{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Lsit',
  components: {
  },
  data () {
    return {
      info: {
        userList: [],
        isFirst: true,
        isLoading: false,
        errMsg: ''
      }
    }
  },
  mounted () {
    this.$bus.$on('updataSearchList', dataObj => {
      this.info = dataObj
    })
  }
}

</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
.list_item {
  width: 200px;
  height: 150px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #cccccc;
  background-color: #ffffff;
}
.list_item img{
  width: 100px;
  height: 100px;
  border: 50%;
  margin-top: 10px;
}
</style>
