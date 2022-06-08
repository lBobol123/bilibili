<template>
  <div>
    <input v-model="keyWord" type="text" placeholder="请输入您想搜索的内容">
    <button @click="sortType = 2">排序升序</button>
    <button @click="sortType = 1">排序降序</button>
    <button @click="sortType = 0">原顺序</button>
    <ul v-for="item in filPersons" :key="item.id">
      <li>{{item.name}}--{{item.age}}</li>
    </ul>
    <ul v-for="(val, key) in car" :key="key">
      <li>{{key}}--{{val}}</li>
    </ul>
    <button @click="addAttr">添加一个属性</button>
  </div>
</template>

模糊搜索，升降排序

<script>
export default {
  components: {
  },
  data () {
    return {
      keyWord: '',
      sortType: 0, // 0.原顺序  1.降序  2.升序
      car: {},
      persons: [
        { id: '001', name: '马冬梅', age: 30, sex: '女' },
        { id: '002', name: '周冬雨', age: 28, sex: '女' },
        { id: '003', name: '周杰伦', age: 35, sex: '男' },
        { id: '004', name: '温兆伦', age: 16, sex: '男' },
        { id: '005', name: '周杰梅', age: 20, sex: '女' }
      ]
    }
  },
  // 方法一
  // watch: {
  //   keyWord: {
  //     immediate: true,
  //     handler (val) {
  //       this.filPersons = this.persons.filter(item => {
  //         return item.name.indexOf(val) !== -1
  //       })
  //     }
  //   },
  //   sortType (val) {
  //     if (val) {
  //       this.filPersons.sort((a, b) => {
  //         return val === 1 ? b.age - a.age : a.age - b.age
  //       })
  //     }
  //   }
  // },

  // 方法二
  computed: {
    filPersons () {
      const arr = this.persons.filter(item => {
        return item.name.indexOf(this.keyWord) !== -1
      })
      if (this.sortType) {
        arr.sort((a, b) => {
          return this.sortType === 1 ? b.age - a.age : a.age - b.age
        })
      }
      return arr
    }
  },
  methods: {
    addAttr () {
      console.log(this)
      this.car.color = '红色'
    }
  }
}

</script>
<style scoped>

</style>
