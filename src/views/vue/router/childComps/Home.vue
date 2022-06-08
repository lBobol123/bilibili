<template>
  <div>
    <h1>Home组件内容</h1>
      <router-link class="title_item" active-class="active" :to="{name: 'news'}">News</router-link>
      <router-link class="title_item" active-class="active" :to="{name: 'message'}">Message</router-link>
    <hr>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log('mounted被调用了')
  },
  beforeDestroy () {
    console.log('beforeDestroy被调用了')
  }
}

</script>
<style scoped>
.title_item {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: inline-block;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
}
.active {
  color: #ffffff;
  background-color: #2c76b9;
}
</style>
