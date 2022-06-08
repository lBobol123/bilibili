<template>
  <div>
    <count></count>
    <div class="line"></div>
    <person></person>
  </div>
</template>

<script>
import count from './childComps/Count.vue'
import person from './childComps/Person.vue'

export default {
  name: 'Index',
  components: {
    count,
    person
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .line {
    width: 100%;
    height: 2px;
    margin-top: 15px;
    background-color: skyblue;
  }
</style>
