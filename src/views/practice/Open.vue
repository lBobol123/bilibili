<template>
  <div>
    <div
      class="bodyFont clearfloat"
      id="bodyFont"
      ref="bodyFont"
      :class="{bodyHeight:contentStatus}"
    >
      <div v-html="123"></div>
    </div>
    <div class="contentToggle" v-if="contentStatus" @click="contentStatus=!contentStatus">阅读全文</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      contentStatus: false,
      curHeight: 0,
      bodyHeight: 5000
    }
  },
  mounted () {
    setTimeout(() => {
      this.contentToggle()
    }, 500)
  },
  methods: {
    contentToggle () {
      this.curHeight = this.$refs.bodyFont.offsetHeight
      if (this.curHeight > this.bodyHeight) {
        this.contentStatus = true
      } else {
        this.contentStatus = false
      }
    }
  }
}
</script>
<style scoped>
.bodyFont {
  /* .font-dpr(16px); */
  color: #333;
  text-align: left;
  line-height: 58px;
  word-break: break-all;
  word-wrap: break-word;
  padding-bottom: 30px;
  height: auto;
  overflow: hidden;
  max-height: 100%;
}
p {
  margin: 16px 0 0 0;
}
.bodyHeight {
  height: 5000px;
}
.contentToggle {
  height: 60px;
  line-height: 60px;
  text-align: center;
  /* color:@red; */
  border: 1px solid red;
  border-radius: 5px;
  /* .font-dpr(14px); */
  margin-bottom: 30px;
}
</style>
