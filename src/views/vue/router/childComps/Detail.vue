<template>
  <div>
    <ul>
      <li>消息编码：{{$route.query.id}}</li>
      <li>消息标题：{{$route.query.title}}</li>
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
    }
  }
}

</script>
<style scoped>

</style>
