<template>
  <div class="login_text">
    <div class="text_left">{{label}}</div>
    <div class="text_right">
      <input :type="type" :placeholder="placeholder" v-model="content">
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'placeholder'],
  data () {
    return {
      content: ''
    }
  },
  watch: {
    content () {
      this.$emit('contentRule', this.content)
    }
  }
}

</script>
<style scoped>
  .login_text {
    display: flex;
    background-color: #fff;
    font-size: 3.733vw;
    padding: 0 4.267vw;
    height: 11.733vw;
    border-bottom: 1px solid #f4f4f4
  }
  .text_left {
    width: 24vw;
    line-height: 11.733vw;
  }
  .text_right {
    flex: 1;
  }
  .text_right input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 2.667vw;
    box-sizing: border-box;
    color: #323233;
  }
  .text_right input::placeholder {
    color: #999;
  }
</style>
