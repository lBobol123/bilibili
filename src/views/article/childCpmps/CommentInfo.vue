<template>
  <div class="comment_info">
    <div class="comment_item" v-for="item in commentList" :key="item.index">
      <div class="comment_title">
        <div class="comment_left">
          <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" alt="">
          <img v-else src="@/assets/img/default_img.jpg" alt="">
          <div class="comment_user">
            <div class="user_name">{{item.userinfo.name}}</div>
            <div class="comment_data">{{item.comment_date}}</div>
          </div>
        </div>
        <div class="coment_right">
          <img src="@/assets/img/like.svg" alt="">
          <span>2.9万</span>
        </div>
      </div>
      <p @click="iptShow(item)" class="comment_text">{{item.comment_content}}</p>
      <div v-if="item.child.length === 0"></div>
      <div v-else class="comment_child"><comment-item @iptShow="iptShow" :commentChild="item.child" /></div>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  components: {
    CommentItem
  },
  data () {
    return {
      model: null,
      commentList: null
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    async getComment () {
      const res = await this.$http.get('/comment/' + this.$route.params.id)
      // console.log(res)
      this.model = res.data
      this.getFirstComment(res.data)
    },
    getFirstComment (data) {
      function fn (temp) {
        const arr = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {//eslint-disable-line
            arr.push(data[i])
            data[i].child = fn(data[i].comment_id)
          }
        }
        return arr
      }
      this.commentList = fn(null)
      // console.log(this.commentList)
    },
    iptShow (item) {
      this.$emit('iptShow', item)
    }
  }
}

</script>
<style scoped>
  .comment_info {
    padding: 15px 0;
  }
  .comment_item {
    padding: 0 15px 10px;
    border-bottom: 1px solid #f4f4f4;
  }
  .comment_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  .comment_left {
    font-size: 13px;
    display: flex;
  }
  .comment_left img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .comment_user {
    margin-left: 15px;
  }
  .user_name {
    color: #757575;
    position: relative;
    bottom: 2px;
  }
  .comment_data {
    color: #999;
    margin-top: 3px;
  }
  .coment_right {
    font-size: 10px;
    color: #999;
  }
  .coment_right img {
    width: 16px;
    vertical-align: middle;
    position: relative;
    bottom: 2px;
    margin-right: 3px;
  }
  .comment_text {
    font-size: 13px;
    color: #212112;
    margin-left: 45px;
  }
  .comment_child {
    margin-left: 43px;
    background-color: #f4f4f4;
    padding: 10px 12px 2px;
    border-radius: 5px;
  }
</style>
