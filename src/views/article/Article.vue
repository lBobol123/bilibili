<template>
  <div v-if="model" class="article">
    <nav-bar />
    <div class="article_video">
      <video class="article_video" src="@/assets/img/video.mp4" controls></video>
    </div>
    <article-info @collectionClick="collectionClick"
                  @subscription="subscription"
                  @subscriptionActive="subscriptionActive"
                  :model="model"
                  :artivleCollect="artivleCollect"
                  :scriptionActive="scriptionActive"></article-info>
    <van-tabs v-model="active" color="#fb7299"
              animated swipeable sticky
              title-active-color="#fb7299" offset-top="0">
      <van-tab title="相关推荐">
        <div class="recommend_parent">
          <home-detail v-for="item in recommend" :key="item.index" :detailItem="item" />
        </div>
      </van-tab>
      <van-tab>
        <template #title>评论 {{commentCount}}</template>
        <comment-title @postComment="postComment" />
        <comment-info @iptShow="iptShow" ref="commentInfo" />
      </van-tab>
    </van-tabs>
    <van-action-sheet v-model="show" close-on-click-action>
      <div class="post_comment">
        <input v-if="comChild" type="text"
               v-model="content" ref="postipt"
               :placeholder="'回复 @' + comChild.userinfo.name + '：'">
        <input v-else type="text" v-model="content" placeholder="回复">
        <span class="publish" @click="postComment(content)">发表</span>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import ArticleInfo from './childCpmps/ArticleInfo'
import HomeDetail from '@/views/home/childComps/HomeDetail'
import CommentTitle from './childCpmps/CommentTitle'
import CommentInfo from './childCpmps/CommentInfo'

export default {
  name: 'Article',
  components: {
    NavBar,
    ArticleInfo,
    HomeDetail,
    CommentTitle,
    CommentInfo
  },
  data () {
    return {
      active: 0,
      model: null,
      artivleCollect: false,
      scriptionActive: false,
      recommend: null,
      commentCount: '',
      show: false,
      content: '',
      comChild: null,
      postCom: {
        comment_content: '',
        comment_date: '',
        parent_id: null,
        article_id: null
      }
    }
  },
  created () {
    this.getArticle()
    this.getRecommend()
    this.getCommentCount()
    this.collectInit()
  },
  watch: {
    $route () {
      this.getArticle()
      this.getRecommend()
      this.collectInit()
    }
  },
  methods: {
    async getArticle () {
      const res = await this.$http.get('/article/' + this.$route.params.id)
      // console.log(res)
      this.model = res.data[0]
      // console.log(this.model)
      if (this.model) {
        this.subscriptionInit()
      }
    },
    async getRecommend () {
      const res = await this.$http.get('/commend')
      this.recommend = res.data
      // console.log(this.recommend)
    },
    async getCommentCount () {
      const res = await this.$http.get('/comment/' + this.$route.params.id)
      this.commentCount = res.data.length
    },
    async postComment (content) {
      if (content !== '') {
        const date = new Date()
        let m = date.getMonth() + 1
        let d = date.getDay()
        if (m < 10) {
          m = '0' + m
        }
        if (d < 10) {
          d = '0' + d
        }
        const str = `${m}-${d}`
        this.postCom.comment_content = content
        this.postCom.comment_date = str
        this.postCom.article_id = this.$route.params.id
        const res = await this.$http.post('/comment_post/' + localStorage.getItem('id'), this.postCom)
        console.log(res)
        this.commentCount += 1
        this.content = ''
        this.show = false
        this.$refs.commentInfo.getComment()
        this.postCom.parent_id = null
        console.log(this.postCom.parent_id)
        if (res.status === 200) {
          this.$msg.success('回复成功')
        }
      } else {
        this.$msg.fail('请输入内容')
      }
    },
    iptShow (item) {
      this.show = Boolean(item)
      this.comChild = item
      this.postCom.parent_id = this.comChild.comment_id
      // console.log(this.comChild.comment_content)
      // this.$refs.postipt.focus()
    },
    // 收藏操作
    async collectionClick () {
      if (!localStorage.getItem('token')) {
        this.$msg.fail('请先登录')
      } else {
        const res = await this.$http.post('/collection/' + localStorage.getItem('id'), {
          article_id: this.$route.params.id
        })
        this.artivleCollect = !this.artivleCollect
        this.$msg.success(res.data.msg)
      }
    },
    // 进页面收藏初始状态
    async collectInit () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/collection/' + localStorage.getItem('id'), {
          params: {
            article_id: this.$route.params.id
          }
        })
        this.artivleCollect = res.data.success
      }
    },
    // 关注
    async subscription () {
      if (!localStorage.getItem('token')) {
        this.$msg.fail('请先登录')
      } else {
        const res = await this.$http.post('/sub_scription/' + localStorage.getItem('id'), {
          sub_id: this.model.userid
        })
        if (res.data.msg == '关注成功') { //eslint-disable-line
          this.scriptionActive = true
          this.$msg.success(res.data.msg)
        }
      }
    },
    async subscriptionActive () {
      const res = await this.$http.post('/sub_scription/' + localStorage.getItem('id'), {
        sub_id: this.model.userid
      })
      if (res.data.msg == '取消关注成功') { //eslint-disable-line
        this.scriptionActive = false
        this.$msg.success(res.data.msg)
      }
    },
    // 进页面关注初始状态
    async subscriptionInit () {
      if (localStorage.getItem('token')) {
        const res = await this.$http.get('/sub_scription/' + localStorage.getItem('id'), {
          params: {
            sub_id: this.model.userid
          }
        })
        if (res.data.success === false) {
          this.scriptionActive = false
        } else {
          this.scriptionActive = true
        }
        console.log(res)
      }
    }
  }
}

</script>
<style scoped>
  .article {
    background-color: #fff;
  }
  .article_video {
    width: 100%;
  }
  .recommend_parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .post_comment {
    display: flex;
    margin: 15px 10px 10px;
  }
  .post_comment input {
    flex: 1;
    box-sizing: border-box;
    padding: 8px 10px;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    background-color: #f4f4f4;
  }
  .post_comment span {
    background-color: #fb7299;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    padding: 8px 16px;
    border-radius: 16px;
  }
</style>
