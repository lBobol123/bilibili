<template>
  <div>
    <keep-alive include="NewsHome">
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './childComps/TabBar.vue'
export default {
  name: 'NewsApp',
  components: {
    TabBar
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>

</style>
