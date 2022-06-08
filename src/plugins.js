export default {
  install (Vue) {
    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 4)
    })

    // 定义全局指令
    Vue.directive('find', {
      bind (element, binding) {
        element.value = binding.value
      },
      inserted (element, binding) {
        element.focus()
      },
      update (element, binding) {
        element.value = binding.value
      }
    })

    // 全局混入
    Vue.mixin({
      data () {
        return {
          a: 100,
          b: 200
        }
      }
    })

    // 给Vue原型上添加一个方法(vm和vc都可用)
    // 使用（this.hello()）
    Vue.prototype.hello = () => { alert('你好啊') }
  }
}
