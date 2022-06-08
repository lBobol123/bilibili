<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当钱求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color: red">CompTwo组件总人数为：{{personList.length}}</h3>
    <select v-model.number="selectNum" name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(selectNum)">+</button>
    <button @click="decrement(selectNum)">-</button>
    <button @click="addOdd(selectNum)">当钱求和为奇数时再加</button>
    <button @click="addWait(selectNum)">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'count',
  components: {
  },
  data () {
    return {
      selectNum: 1
    }
  },
  computed: {
    // 对象写法，前面的sum为本组件渲染的变量，后面的sum为state里的变量
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' })
    // 数组写法
    // ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('countAbout', {
      sum: state => state.sum,
      school: state => state.school,
      subject: state => state.subject
    }),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout', ['bigSum'])
  },
  methods: {
    /* increment () {
      this.$store.commit('INCREMENT', this.selectNum)
    },
    decrement () {
      this.$store.commit('DECREMENT', this.selectNum)
    }, */
    ...mapMutations('countAbout', { increment: 'INCREMENT', decrement: 'DECREMENT' }),
    /* addOdd () {
      this.$store.dispatch('addOdd', this.selectNum)
    },
    addWait () {
      this.$store.dispatch('addWait', this.selectNum)
    }, */
    ...mapActions('countAbout', ['addOdd', 'addWait'])
  }
}

</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
