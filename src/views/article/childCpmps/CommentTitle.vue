<template>
  <div class="article_comment_title">
    <!-- <div class="comment_title">
      <span>评论</span>
      <span class="comment_count">(432)</span>
    </div> -->
    <div class="comment_write">
      <img v-if="userInfo" :src="userInfo.user_img" alt="">
      <img v-else src="@/assets/img/default_img.jpg" alt="">
      <input type="text" v-model="commentText" placeholder="说点什么吧">
      <span class="publish" @click="publishClick">发表</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: null,
      commentText: ''
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.getUserInfo()
    }
  },
  methods: {
    async getUserInfo () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.userInfo = res.data[0]
    },
    publishClick () {
      if (!localStorage.getItem('token') && !localStorage.getItem('id') && !this.userInfo) {
        this.$msg.fail('请先登录')
      } else {
        this.$emit('postComment', this.commentText)
        this.commentText = ''
      }
    }
  }
}

</script>
<style scoped>
  .article_comment_title {
    padding: 30px 12px 5px;
  }
  .comment_title {
    padding-bottom: 10px;
  }
  .comment_count {
    margin-left: 5px;
    color: #aaa;
  }
  .comment_write img {
    width: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 12px;
  }
  .comment_write input {
    padding: 8px 16px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 16px;
    font-size: 13px;
    width: 58%;
  }
  .publish {
    background-color: #fb7299;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    padding: 8px 16px;
    border-radius: 16px;
  }
</style>
