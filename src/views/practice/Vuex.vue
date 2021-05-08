<template>
  <div>
    <button @click="decrement">-</button>
    {{count}}
    {{decount}}
    <button @click="increment">+</button>
    <div>{{name}}</div>
    <div>{{sex}}</div>
    <div>{{from}}</div>
    <div>{{test}}</div>
    <div @click="type">{{prefect}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      str: '出生',
      decount: this.$store.state.count
    }
  },
  created () {
    setTimeout(() => {
      this.str = '出生地'
    }, 1000)
  },
  computed: {
    prefect () {
      return true
    },
    ...mapState({
      count: 'count',
      name: 'name',
      sex: (state) => state.sex,
      from: function (state) {
        return `${this.str}:${state.from}`
      },
      test () {
        return `测试${this.str}`
      }
    })
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    type () {
      console.log(typeof (this.prefect))
    }
  }
}

</script>
<style scoped>

</style>
