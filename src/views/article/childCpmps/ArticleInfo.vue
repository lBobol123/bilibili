<template>
  <div class="article_info">
    <div>
      <span class="title_left">{{model.category.title}}</span>
      <span class="title_right">{{model.name}}</span>
    </div>
    <div class="article_user">
      <span class="article_author">{{model.userinfo.name}}</span>
      <span v-if="!scriptionActive" class="subscription" @click="subscription">+关注</span>
      <span v-else class="subscription_active" @click="subscriptionActive">已关注</span>
    </div>
    <div class="artivle_center">
      <span>154.3万次观看</span>
      <span>1.2万次弹幕</span>
      <span>{{model.date}}</span>
    </div>
    <div class="article_bottom">
      <div class="bottom_info" @click="collectClick">
        <img v-if="!artivleCollect" src="@/assets/img/article/collect.svg" alt="">
        <img v-else src="@/assets/img/article/collect_active.svg" alt="">
        <span :class="{active: artivleCollect}">收藏</span>
      </div>
      <div class="bottom_info">
        <img src="@/assets/img/article/cached.svg" alt="">
        <span>缓存</span>
      </div>
      <div class="bottom_info">
        <img src="@/assets/img/article/share.svg" alt="">
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model', 'artivleCollect', 'scriptionActive'],
  data () {
    return {
    }
  },
  methods: {
    collectClick () {
      this.$emit('collectionClick')
    },
    subscription () {
      this.$emit('subscription')
    },
    subscriptionActive () {
      this.$emit('subscriptionActive')
    }
  }
}

</script>
<style scoped>
  .article_info {
    padding: 2.66667vw;
  }
  .title_left {
    font-size: 3.2vw;
    border-radius: 4vw;
    margin-right: 2.66667vw;
    padding: 1.06667vw 3.2vw;
    background-color: #f4f4f4;
    color: #fb7299;
  }
  .title_right {
    font-size: 4.26667vw;
  }
  .article_user {
    padding: 4vw 2.66667vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article_author {
    color: #323232;
    font-size: 4vw;
    margin-right: 4vw;
  }
  .subscription {
    background-color: #fb7299;
    color: #fff;
    font-size: 3.2vw;
    padding: 0.8vw 3.2vw;
    border-radius: 0.8vw;
  }
  .subscription_active {
    background-color: #f4f4f4;
    color: rgb(129, 129, 129);
    font-size: 3.2vw;
    padding: 0.8vw 3.2vw;
    border-radius: 0.8vw;
  }
  .artivle_center {
    padding: 2.66667vw;
  }
  .artivle_center span {
    color: #aab1c7;
    font-size: 3.46667vw;
    margin-right: 2.66667vw;
  }
  .article_bottom {
    display: flex;
  }
  .bottom_info {
    align-items: center;
    font-size: 3.46667vw;
    color: #757575;
  }
  .bottom_info img {
    width: 6.4vw;
    vertical-align: middle;
    margin: 0 0.53333vw 0 2.66667vw;
  }
  .bottom_info span {
    vertical-align: middle;
  }
  .active {
    color: #fb7299
  }
</style>
