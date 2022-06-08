<template>
  <div>
    <search></search>
    <list></list>
  </div>
</template>

<script>
import search from './childComps/Search.vue'
import list from './childComps/List.vue'

export default {
  name: 'SearchCase',
  components: {
    search,
    list
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>

</style>
