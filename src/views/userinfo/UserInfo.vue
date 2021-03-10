<template>
  <div class="user_info">
    <nav-bar />
    <img class="user_banner" src="@/assets/img/bannerTop_new.png" alt="">
    <user-detail />
    <user-article />
    <div class="log_out" @click="log_out = true">退出登录</div>
    <van-dialog v-model="log_out" title="您确定要退出么"
                show-cancel-button @confirm="logOutClick">
    </van-dialog>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import UserDetail from './childComps/UserDetail'
import UserArticle from './childComps/UserArticle'

export default {
  components: {
    NavBar,
    UserDetail,
    UserArticle
  },
  data () {
    return {
      model: {},
      log_out: false
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    logOutClick () {
      this.$msg.success('退出成功')
      setTimeout(() => {
        window.localStorage.clear()
        this.$router.push('/home')
        location.reload()
      }, 500)
    }
  }
}

</script>
<style scoped>
  .user_banner {
    height: 100px;
    width: 100%;
  }
  .log_out {
    position: fixed;
    bottom: 0;
    height: 42px;
    line-height: 42px;
    text-align: center;
    width: 100%;
    border-radius: 21px;
    color: #fff;
    background-color: #fb7299;
  }
</style>
