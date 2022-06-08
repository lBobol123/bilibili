<template>
  <div>
    <div>姓名：{{firstName}}-{{lastName}}</div>
    <div>姓名：{{fullName}}</div>
    <button @click="fullName = '李-四'">变李四</button>

    <h3>css样式绑定</h3>
    <div :class="['basic', mood]" @click="changeMood">test</div>
  </div>
</template>

  计算属性：
    1.定义：要用的属性不存在，要通过已有属性计算得来。
    2.原理：底层借助了Object.defineProperty方法提供的getter和setter。
    3.get函数什么时候执行？
      (1).初次读取时会执行一次。
      (2).当依赖的数据发生改变时会被再次调用。
    4.优势：与methods实现相比，内部有缓存机制(复用)，效率更高，调试方便。
    5.备注：
      (1).计算属性最终会出现在vm上，直接读取使用即可。
      (2).如果计算属性要被修改，那必须写set函数去响应修改。且set中要引起计算时依赖的数据发生改变

  computed和watch之间的区别：
    1.computed能完成的功能，watch都可以完成。
    2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
  两个重要的小原则：
    1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。
    2.所有不被Vue所管理的函数(定时器的回调函数、ajax的回调函数、Promise的回调函数)，最好写成箭头函数，这样this的指向才是vm或组件实例对象。

<script>
export default {
  components: {
  },
  data () {
    return {
      firstName: '张',
      lastName: '三',
      mood: 'happy'
    }
  },
  computed: {
    /* fullName: {
      // get有什么作用？ 当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
      // get什么时候调用？ 1.初次读取fullName时。2.所依赖的数据发生变化时。
      get () {
        return this.firstName + '-' + this.lastName
      },
      // set什么时候调用？当fullName被修改时
      set (value) {
        const arr = value.split('-')
        this.firstName = arr[0]
        this.lastName = arr[1]
      }
    } */
    // 简写(就是getter方法)
    fullName () {
      return this.firstName + '-' + this.lastName
    }
  },
  watch: {
    fullName: {
      immediate: true,
      handler (newValue, oldValue) {
        console.log('fullName变化了', newValue, oldValue)
      }
    }
  },
  methods: {
    changeMood () {
      const arr = ['happy', 'bad', 'normal']
      this.mood = arr[Math.floor(Math.random() * 3)]
    }
  }
}

</script>
<style scoped>
  .basic {
    width: 200px;
    height: 100px;
    border: 1px solid #000000;
  }
  .happy {
    border: 4px solid red;
    background-color: rgba(255, 255, 0, 0.644);
    background: linear-gradient(30deg, yellow, pink, orange, yellow) ;
  }
  .bad {
    border: 4px dashed green;
    background-color: #f0e7d8;
  }
  .normal {
    border: 4px dashed blue;
    background-color: skyblue;
  }
</style>
