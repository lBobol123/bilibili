<template>
  <div class="user_detail">
    <div class="detail_info">
      <img v-if="user_img" :src="user_img" alt="">
      <img v-else src="@/assets/img/default_img.jpg" alt="">
      <div class="detail_info_right">
        <div class="edit_top_wrapper">
          <div class="detail_edit_top">
            <span >1314</span>
            <span class="detail_text">粉丝</span>
          </div>
          <div class="detail_edit_top">
            <span >520</span>
            <span class="detail_text">关注</span>
          </div>
          <div class="detail_edit_top">
            <span >1235</span>
            <span class="detail_text">获赞</span>
          </div>
        </div>
        <div class="detail_edit" @click="editClick">
          <div class="edit_text">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="user_name">520qing</h2>
      <div v-if="user_desc" class="user_introduce">{{user_desc}}</div>
      <div v-else class="user_introduce">这个人很懒，什么都没写</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      user_img: '',
      user_desc: ''
    }
  },
  created () {
    this.getUserImg()
  },
  methods: {
    editClick () {
      this.$router.push('/edit')
    },
    async getUserImg () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.user_img = res.data[0].user_img
      this.user_desc = res.data[0].user_desc
    }
  }
}

</script>
<style scoped>
  .user_detail {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #dddddd;
  }
  .detail_info {
    display: flex;
  }
  .detail_info img {
    width: 88px;
    height: 88px;
    margin-right: 20px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .detail_info_right {
    /* width: 100%; */
    flex: 1;
  }
  .edit_top_wrapper {
    display: flex;
  }
  .edit_top_wrapper div:nth-child(1),
  .edit_top_wrapper div:nth-child(2) {
    border-right: 1px solid #ccc;
  }
  .detail_edit_top {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detail_text {
    color: #aaa;
    padding-top: 0.8vw;
  }
  .detail_edit {
    /* width: 90%; */
    border: 1px solid #fb7a9f;
    border-radius: 5px;
    margin: 2.667vw;
  }
  .edit_text {
    color: #fb7a9f;
    text-align: center;
    padding: 0.8vw;
  }
  .user_name {
    font-weight: 400;
    margin: 15px 0;
  }
  .user_introduce {
    color: #999;
    height: 44px;
    font-size: 16.001px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
