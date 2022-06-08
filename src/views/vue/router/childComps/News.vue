<template>
  <div>
    <ul>
      <li v-for="(item) in newsList" :key="item.title">
        {{item.title}}
        <input type="text">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      newsList: [
        { title: 'news001' },
        { title: 'news002' },
        { title: 'news003' }
      ]
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

</style>
