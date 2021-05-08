<template>
  <div class="home_detail" @click="$router.push(`/article/${detailItem.id}`)">
    <div class="detail_info">
      <div class="img_bottom">
        <div>
          <img class="paly_svg" src="@/assets/img/play.svg" alt="">
          <span>666</span>
        </div>
        <div>
          <img src="@/assets/img/comment.svg" alt="">
          <span>{{detailItem.commentlen ? detailItem.commentlen : 323}}</span>
        </div>
      </div>
      <img class="detail_img" src="@/assets/img/detail_img.jpg" alt="">
    </div>
    <div class="detail_title">{{detailItem.name}}</div>
  </div>
</template>

<script>
export default {
  props: ['detailItem'],
  data () {
    return {
    }
  },
  methods: {
    // pathPush () {
    //   if (this.$route.path !== '/article/' + this.detailItem.id) {
    //     this.$router.push('/article/' + this.detailItem.id)
    //   }
    // }
  }
}

</script>
<style scoped>
  .home_detail {
    margin-top: 10px;
    width: 45%;
  }
  .detail_info {
    position: relative;
  }
  .img_bottom {
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 14px;
    padding: 3px 5px;
    background-image: linear-gradient(transparent, #333);
  }
  .img_bottom img {
    vertical-align: middle;
    height: 14px;
    padding: 0 3px 0 2px
  }
  .paly_svg {
    margin-bottom: 3px;
  }
  .detail_img {
    width: 100%;
  }
  .detail_title {
    font-size: 12px;
    margin: 6px 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
</style>
