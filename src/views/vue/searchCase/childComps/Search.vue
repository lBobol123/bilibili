<template>
  <div class="search_wrapy">
    <h1>Search Github Users</h1>
    <div>
      <input style="margin-right: 10px" v-model="inputText" type="text" placeholder="请输入想所搜的内容">
      <button @click="searchClick">Search</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  components: {
  },
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    searchClick () {
      this.$bus.$emit('updataSearchList', { isFirst: false, isLoading: true, error: '' })
      axios.get('https://api.github.com/search/users', {
        params: {
          q: this.inputText.trim()
        }
      }).then(response => {
        // console.log('请求成功')
        this.$bus.$emit('updataSearchList', { isLoading: false, userList: response.data.items })
      },
      error => {
        this.$bus.$emit('updataSearchList', { isLoading: false, userList: [], errMsg: error.message })
      })
    }
  }
}

</script>
<style scoped>
.search_wrapy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  background-color: #cecece;
}
.search_wrapy h1 {
  margin: 0;
}
.search_wrapy div {
  margin-top: 10px;
}
</style>
