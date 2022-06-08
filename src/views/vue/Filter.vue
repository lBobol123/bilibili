<template>
  <div>
    <!-- 过滤器 -->
    <div>{{time | fmtTime}}</div>
    <!-- 过滤器传参 -->
    <div>{{time | fmtTime("YYYY-MM-DD")}}</div>
    <!-- 过滤再过滤 -->
    <div>{{time | fmtTime("YYYY-MM-DD") | mySlice}}</div>
  </div>
</template>

  全局过滤还没有写
  过滤器：
    定义：对要显示的数据进行特定格式化后再显示(适用于一些简单逻辑的处理)。
    语法：
      1.注册过滤器：Vue.filter(name, callback) 或 new Vue(filter:{})
      2.使用过滤器：{{ xxx | 过滤器名 }} 或 v-bind:属性 = "xxx | 过滤器名"
    备注：
      1.过滤器也可以接受额外参数、多个过滤器也可以串联
      2.并没有改变原本的数据，是产生新的对应的数据

<script>
import dayjs from 'dayjs'

export default {
  components: {
  },
  data () {
    return {
      time: 1638939781945
    }
  },
  filters: {
    fmtTime (value, str = 'YYYY-MM-DD hh:mm:ss') {
      return dayjs(value).format(str)
    }
    // mySlice (value) {
    //   return value.slice(0, 4)
    // }
  }
}

</script>
<style scoped>

</style>
