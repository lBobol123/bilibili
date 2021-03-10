<template>
  <div class="nav">
    <div class="nav_logo" @click="$router.push('/home')">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="nav_search">
      <div class="nav_search_center">
        <!-- <van-icon name="search" /> -->
        <img src="@/assets/img/search.svg" alt="">
      </div>
    </div>
    <div class="nav_right">
      <img v-if="navUserImg" :src="navUserImg" alt="" @click="$router.push('/userinfo')">
      <img v-else src="@/assets/img/default_img.jpg" alt="" @click="$router.push('/userinfo')">
      <div class="nav_download">下载App</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      navUserImg: ''
    }
  },
  mounted () {
    this.getnavUserImg()
  },
  methods: {
    async getnavUserImg () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        this.navUserImg = res.data[0].user_img
      }
    }
  }
}

</script>
<style scoped>
  .nav {
    display: flex;
    height: 11.73333vw;
    background-color: #fff;
  }
  .nav_logo img {
    height: 11.73333vw;
  }
  .nav_search {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.667vw;
  }
  .nav_search_center {
    width: 100%;
    height: 5.86667vw;
    border-radius: 2.933vw;
    background-color: #f4f4f4;
    position: relative;
  }
  .nav_search_center img {
    position: absolute;
    left: 2.133vw;
    top: 50%;
    margin-top: -2.13333vw;
  }
  .nav_right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_right img {
    width: 6.93333vw;
    height: 6.93333vw;
    border-radius: 50%;
  }
  .nav_download {
    color: #fff;
    font-size: 3.73333vw;
    background-color: #fb7299;
    padding: 5px 2.667vw;
    margin: 0 2.667vw;
    border-radius: 0.8vw;
  }
</style>
