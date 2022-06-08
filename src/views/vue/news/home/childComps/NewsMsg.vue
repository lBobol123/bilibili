<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
    <van-list v-model="loading"
              :finished="finished"
              finished-text="我也是有底线的~"
              :offset="10"
              @load="onLoad">
      <div class="article_item" v-for="(article,index) in articleList" :key="index">
        <div v-if="article.cover.type === 1" class="img_one">
          <div class="article_title">{{article.title}}</div>
          <img :src="article.cover.images[0]" alt="">
        </div>
        <div v-if="article.cover.type === 3" class="img_three">
          <div class="article_title">{{article.title}}</div>
          <div class="img_three_wrapper">
            <img v-for="(img, index) in article.cover.images" :key="index" :src="img" alt="">
          </div>
        </div>
        <div v-if="article.cover.type === 0" class="article_title no_img_title">{{article.title}}</div>
        <div class="article_botoom">
          <div>
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}}</span>
            <span>{{article.pubdate}}</span>
          </div>
          <div>x</div>
        </div>
        <div class="article_border"></div>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { getArticleApi } from '@/api/newsApi.js'
export default {
  name: 'NewsMsg',
  components: {
  },
  // props: {
  //   articleList: {
  //     type: Array,
  //     default: function () {
  //       return []
  //     }
  //   }
  // },
  data () {
    return {
      loading: true,
      finished: false,
      refreshing: false,
      getArticleListParams: {
        _page: 1,
        _limit: 10
      },
      articleList: []
    }
  },
  mounted () {
    this.initArticleList()
  },
  activated () {
    window.addEventListener('scroll', this.recordTopHandle())
  },
  deactivated () {
    window.removeEventListener('scroll', this.recordTopHandle())
  },
  methods: {
    // 获取文章列表
    async initArticleList () {
      const { data } = await getArticleApi(this.getArticleListParams)
      this.articleList = data
      this.loading = false
    },
    // 下拉加载触发事件
    async onLoad () {
      console.log('触发下拉加载')
      this.getArticleListParams._page += 1
      const { data } = await getArticleApi(this.getArticleListParams)
      this.articleList.push(...data)
      this.loading = false
      if (data.length < 10) {
        this.finished = true
      }
    },
    // 下拉刷新出发事件
    async onRefresh () {
      console.log('触发下拉加载')
      this.getArticleListParams._page += 1
      const { data } = await getArticleApi(this.getArticleListParams)
      this.articleList = [...data, ...this.articleList]
      this.refreshing = false
      if (data.length < 10) {
        this.finished = true
      }
    },
    recordTopHandle () {
      return this._.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
      // this.$route.meta.top = window.scrollY
      // console.log(window.scrollY)
    }
  }
}

</script>
<style>
.article_item {
  padding: 0 10px;
}
.article_item img {
  width: 117px;
  height: 70px;
}
.no_img_title {
  padding: 9px 0 5px 0;
}
.img_one {
  padding-top: 9px;
  display: flex;
  justify-content: space-between;
}
.img_one .article_title {
  padding-right: 3px;
}
.img_three {
  padding-top: 9px;
}
.img_three_wrapper {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
}
.article_botoom {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #999999;
  padding: 5px 0;
}
.article_botoom span {
  padding-right: 10px;
}
.article_border {
  border-bottom: 1px solid #999999;
  transform-origin: 0 0; /* 设置元素旋转的基点 */
  transform: scale(1, .5); /* 缩放，元素占位不变，宽高不变，变的是X轴和Y轴的刻度 */
}
</style>
