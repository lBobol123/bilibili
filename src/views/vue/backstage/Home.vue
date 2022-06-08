<template>
  <div class="home">
    <MyHeader></MyHeader>
    <div class="home_detail">
      <MyAside></MyAside>
      <router-view />
    </div>
  </div>
</template>

<script>
import MyHeader from './childComps/MyHeader.vue'
import MyAside from './childComps/MyAside.vue'
export default {
  name: '',
  components: {
    MyHeader,
    MyAside
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
.home {
  /* width: 100%; */
  height: 100%;
  background-color: #ffffff;
  /* border: 2px solid #f4f4f4; */
}
.home_detail {
  height: 100%;
  display: flex;
}
</style>
