<template>
  <div>
    <div class="title">头条</div>
    <div class="news_content">
      <news-msg />
      <div v-show="scrollTop >= 500" class="back_top" @click="backTopClick">
        <img src="@/assets/img/back_top.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleApi } from '@/api/newsApi'
import NewsMsg from './childComps/NewsMsg.vue'

export default {
  name: 'NewsHome',
  components: {
    NewsMsg
  },
  data () {
    return {
      page: 1,
      limit: 10,
      loading: false,
      finished: false,
      articleList: [],
      scrollTop: 0
    }
  },
  mounted () {
    // this.initArticlesList()
    window.addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    async initArticlesList () {
      const params = {
        _page: this.page,
        _limt: this.limit
      }
      const { data: res } = await getArticleApi(params)
      this.articleList = res
    },
    scrollHandle () {
      this.scrollTop = document.documentElement.scrollTop
    },
    backTopClick () {
      const timer = setInterval(() => {
        document.documentElement.scrollTop -= 50
        if (this.scrollTop <= 0) {
          clearInterval(timer)
        }
      }, 5)
      // document.documentElement.scrollTop = 0
    }
  }
}

</script>
<style scoped>
.title {
  position: fixed;
  height: 40px;
  text-align: center;
  line-height: 40px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0076ff;
  color: #ffffff;
  z-index: 3;
}
.news_content {
  padding: 40px 0 58px 0;
}
.back_top {
  position: fixed;
  bottom: 120px;
  right: 30px;
  z-index: 99;
}
.back_top img {
  width: 55px;
  height: 55px;
  opacity: .8;
}
</style>
