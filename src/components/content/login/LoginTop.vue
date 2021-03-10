<template>
  <div class="login_top">
    <div></div>
    <div class="title">{{topTitle}}</div>
    <div class="operation" @click="operationClick">{{operation}}</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['topTitle', 'operation'],
  data () {
    return {
    }
  },
  methods: {
    operationClick () {
      this.$emit('operationClick')
    }
  }
}

</script>
<style scoped>
  .login_top {
    display: flex;
    height: 11.733vw;
    background-color: #fff;
  }
  .login_top div {
    flex: 1;
    line-height: 11.733vw;
    text-align: center;
  }
  .title {
    font-size: 4.7vw;
  }
  .operation {
    font-size: 3.467vw;
  }
</style>
