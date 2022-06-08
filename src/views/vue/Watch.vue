<template>
  <div>
    <div>今天天气很{{isHot ? "炎热" : "凉爽"}}</div><br/>
    <button @click="isHot = !isHot">切换天气</button><br/><br/>
    <input type="text" :value="numbers.a"><br/><br/>
    <button @click="numbers.a++">点一下++a</button><br/><br/>
    <input type="text" :value="numbers.f"><br/><br/>
    <button @click="numbers.f++">点一下++b</button><br/><br/>
  </div>
</template>

    监听属性watch:
      1.当被监视的属性变化时，回调函数自动调用，进行相关操作
      2.监视的属性必须存在，才能进行监视！！
      3.监视的两种写法：
        (1).new Vue时传入watch配置
        (2).通过vm.$watch监视
    深度监视：
      1.Vue中的Watch默认不监测对象内部值的改变（一层）。
      2.配置deep:true可以监测对象内部值改变（多层）。
    备注：
      1.Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
      2.使用watch时根据数据的具体结构，决定是否采用深度监视。

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
      isHot: true,
      numbers: {
        a: 1,
        f: 1,
        b: {
          c: {
            d: {
              e: 100
            }
          }
        }
      }
    }
  },
  methods: {
  },
  watch: {
    /*  isHot: {
      // immediate: true,
      handler (newValue, oldValue) {
        console.log('isHot改变了', newValue, oldValue)
      }
    } */
    // 简写
    isHot (newValue, oldValue) {
      console.log('isHot改变了', newValue, oldValue)
    },
    numbers: {
      immediate: true,
      deep: true,
      handler () {
        console.log('number改变了')
      }
    }
  }
}

</script>
<style scoped>

</style>
