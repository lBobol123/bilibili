<template>
  <div>
    <h2 :style="{opacity}">学习Vue</h2>
  </div>
</template>

生命周期
    1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
    2.是什么？Vue在关键时刻帮我们调用的一些特殊名称的函数。
    3.生命周期函数的名字不可更改，但函数的具体内容时程序员根据需求编写的。
    4.生命周期函数中的this指向的时vm或组件实例对象。

              初始化：生命周期、事件(时间修饰符once)，但数据代理还未开始。
brforeCreate: 无法通过vm访问到data中的数据、methods中的方法。

              初始化：数据监测(Vue如何监测对象变化的、如何监测数组变化的、给对象里的属性匹配getter,setter、对操作数组的方法进行二次包装)、数据代理。
created:      可以通过vm访问到data中的数据、methods中配置的方法。

              查看是否有'el'选项，没有的话调用vm.$mount(el)，然后看是否有'template'选项，没有的话编译el的外部HTML(包含#root的dom)作为模板。
              此阶段Vue开始解析模板，生成虚拟DOM(内存中)，页面还不能显示解析好的内容。
              往vm.$el上存一份el的数据(虚拟DOM，当进行虚拟DOM 真实DOM对比时，$el里有之前的节点才能复用)
beforeMount:  1.页面呈现的是未经Vue编译的DOM结构。
              2.所有DOM的操作，最终都不能奏效。(原生DOM的操作好使，但是会继续Vue模板编译过程，生成真实DOM)。

              将内存中的虚拟DOM转为真实DOM插入页面
mounted:      1.页面中呈现的是经过Vue编译的DOM
              2.对DOM的操作均有效(尽可能避免)。至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等初始化功能。

              当数据改变时(data里的数据改变)
boforeUpdate: 此时：数据时新的，但页面时旧的，即：页面尚未和数据保持同步(data里的数据已更新，但是页面没有更新)。

              根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即：完成了Model->View的更新。
updated:      此时数据是新的，页面也是新的，即：页面和数据保持同步。

              当vm.$destroy()被调用时
beforeDestroy:vm中所有的：data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器、取消的订阅消息、解绑自定义事件等收尾工作
destroyed

常用的生命周期钩子：
    1.mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
    2.beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例：
    1.销毁后借助Vue开发者工具看不到任何信息。
    2.销毁后自定义事件会失效，但原生DOM时间依然有效。
    3.一般不会在beforeDestory操作数据，因为即使操作数据，也不会再触发更新流程了。

<script>
export default {
  components: {
  },
  data () {
    return {
      opacity: 1
    }
  },
  mounted () {
    setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  }
}

</script>
<style scoped>

</style>
