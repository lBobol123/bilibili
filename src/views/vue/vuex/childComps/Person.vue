<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">CompOne组件求和为：{{sum}}</h3>
    <h3>返回最新添加的姓：{{getFirstName}}</h3>
    <input v-model="inputPerson" type="text" placeholder="请输入名字">
    <button style="margin-left: 5px" @click="addPerson">添加</button>
    <button style="margin-left: 5px" @click="addWangPerson">添加一个王姓的人</button>
    <button style="margin-left: 5px" @click="addRandomPerson">添加一个随机的名字</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{item.name || ''}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'person',
  components: {
  },
  data () {
    return {
      inputPerson: ''
    }
  },
  computed: {
    personList () {
      return this.$store.state.personAbout.personList
    },
    sum () {
      return this.$store.state.countAbout.sum
    },
    getFirstName () {
      return this.$store.getters['personAbout/getFirstName']
    }
  },
  methods: {
    addPerson () {
      if (this.inputPerson.trim()) {
        this.$store.commit('personAbout/ADDPERSON', { id: nanoid(), name: this.inputPerson })
        this.inputPerson = ''
      }
    },
    addWangPerson () {
      if (this.inputPerson.trim()) {
        this.$store.dispatch('personAbout/addWangPerson', { id: nanoid(), name: this.inputPerson })
        this.inputPerson = ''
      }
    },
    addRandomPerson () {
      this.$store.dispatch('personAbout/addRandomPerson')
    }
  }
}

</script>
<style scoped>

</style>
