<template>
  <div>
    <h1>学生信息</h1>
    <button @click="student.age++">年龄+1岁</button> <br />
    <button @click="addSex">添加性别属性，默认值：男</button> <br />
    <button @click="addFriend">在列表首位添加一个朋友</button> <br />
    <button @click="modifyFirstFriendName">修改第一个朋友的名字为：张三</button>
    <br />
    <button @click="addHobby">添加一个爱好</button> <br />
    <button @click="modifyFirstHobby">修改第一个爱好为：开车</button> <br />
    <div>
      <h4>姓名：{{ student.name }}</h4>
      <h4>年龄：{{ student.age }}</h4>
      <h4 v-if="student.sex">性别：{{ student.sex }}</h4>
      <h4>爱好：</h4>
      <div>
        <ul v-for="(item, index) in student.hobby" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
      <h4>朋友们：</h4>
      <div>
        <ul v-for="(item, index) in student.friends" :key="index">
          <li>{{ item.name }}--{{ item.age }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

数据劫持 Vue监视数据的原理 1.vue会监视data中所有层次的数据。
2.如何监测对象中的数据？ 通过setter实现监测，且要在newVue时就传入要监测的数据。
(1).对象中后追加的属性，Vue默认不做响应式处理。
(2).如需给后添加的属性做响应式，请使用如下API: Vue.set(target,
propertyName/index, value)或 vm.$set(target, propertyName/index, value)
3.如何监测数组中的数据？(数组是响应式，但是数组里的元素没有getter,setter，不是响应式的。所以直接改变数组元素，监测不到)
通过包裹数组更新元素的方法实现，本质就是做了两件事：
(1).调用原生对应的方法对数组进行更新。
(2).重新解析模板,生成新的虚拟DOM，新旧DOM对比，进而更新页面
4.在Vue修改数组中的某个元素一定要用如下方法：
1.使用这些API：push()、shift()、unshift()、pop()、sort()、reverse()、splice()。
2.Vue.set() 或 vm.$set() 特别注意：Vue.set() 和 vm.$set()
不能给vm或vm的根数据对象添加属性！！！

<script>
export default {
  components: {},
  data () {
    return {
      student: {
        name: 'tom',
        age: 18,
        hobby: ['抽烟', '喝酒', '烫头'],
        friends: [
          { name: 'jerry', age: 35 },
          { name: 'tony', age: 36 }
        ],
        height: ''
      }
    }
  },
  methods: {
    addSex () {
      // eslint-disable-next-line no-undef
      console.log(Vue)
      this.$set(this.student, 'sex', '男')
    },
    addFriend () {
      this.student.friends.unshift({ name: 'jack', age: 70 })
      // this.student.friends.splice(0, 0, { name: 'jack', age: 70 })
    },
    modifyFirstFriendName () {
      // this.student.friends[0].name = '张三'
      // this.student.friends[0].age = 24
      this.$set(this.student.friends, 0, { name: '张三', age: 24 })
    },
    addHobby () {
      this.student.hobby.push('游玩')
    },
    modifyFirstHobby () {
      // this.student.hobby.splice(0, 1, '开车')
      this.$set(this.student.hobby, 0, '开车')
    }
  }
}
</script>
<style scoped></style>
