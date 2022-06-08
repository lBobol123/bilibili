<template>
  <div>
    <ul>
      <li v-for="item in msgList" :key="item.id">
        {{ item.title }}
        <button @click="pushClick(item)">push查看</button>
        <button @click="replaceClick(item)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      msgList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' }
      ]
    }
  },
  methods: {
    pushClick (val) {
      this.$router.push({
        name: 'detail',
        query: {
          id: val.id,
          title: val.title
        }
      })
    },
    replaceClick (val) {
      this.$router.replace({
        name: 'detail',
        query: {
          id: val.id,
          title: val.title
        }
      })
    }
  }
}
</script>
<style scoped></style>
