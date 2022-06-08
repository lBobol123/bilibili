<template>
  <ul class="todo_main">
    <my-item v-for="todoObj in todoList"
             :key="todoObj.id"
             :todoObj="todoObj"
             @stateChange="stateChange"
             @delectTodo="delectTodo"
             @updataMsg="updataMsg">
    </my-item>
  </ul>
</template>

<script>
import myItem from './MyItem'

export default {
  components: {
    myItem
  },
  data () {
    return {
      todoList: JSON.parse(localStorage.getItem('todo')) || [],
      selectAll: false
    }
  },
  mounted () {
    // 把列表全部的数据传过去
    this.$bus.$emit('todoListLen', this.todoList.length)
    // 把新添加一条数据的事件挂在事件总线上
    this.$bus.$on('addTodoList', data => {
      this.todoList.unshift(data)
      this.$bus.$emit('todoListLen', this.todoList.length)
    })
    // 已完成的数据
    const doneList = this.todoList.filter(item => {
      return item.done
    })
    // 触发勾选数据的长度的事件
    this.$bus.$emit('todoDoneLen', doneList.length)
    // 底部点击后改变list里的done状态
    this.$bus.$on('isSelectAllChange', data => {
      this.todoList = this.todoList.map(item => ({
        ...item,
        done: data
      }))
    })
    // 清除所有已完成list数据
    this.$bus.$on('clearAllDone', () => {
      this.todoList = this.todoList.filter(item => {
        return !item.done
      })
    })
  },
  // mounted () {
  //   this.$bus.$on('addTodoList', data => {
  //     this.todoList.unshift(data)
  //   })
  //   const doneList = this.todoList.filter(item => {
  //     return item.done
  //   })
  // },
  beforeDestroy () {
    this.$bus.$off('addTodoList')
    this.$bus.$off('isSelectAllChange')
    this.$bus.$off('clearAllDone')
  },
  watch: {
    todoList: {
      deep: true,
      handler (value) {
        localStorage.setItem('todo', JSON.stringify(value))
        this.$bus.$emit('todoListLen', this.todoList.length)
        const doneList = this.todoList.filter(item => {
          return item.done
        })
        this.$bus.$emit('todoDoneLen', doneList.length)
        // 判断todoList数组是否为空，为空则默认下方全选按钮不打勾
        if (this.todoList.length !== 0) {
          this.selectAll = this.todoList.every(item => {
            return item.done
          })
        } else if (this.todoList.length === 0) {
          this.selectAll = false
        }
        this.$bus.$emit('isSelect', this.selectAll)
      }
    }
  },
  methods: {
    stateChange (value) {
      const index = this.todoList.findIndex(item => {
        return item.id === value
      })
      this.todoList[index].done = !this.todoList[index].done
    },
    delectTodo (value) {
      // const index = this.todoList.findIndex(item => {
      //   return item.id === value
      // })
      // this.todoList.splice(index, 1)

      this.todoList = this.todoList.filter(item => {
        return item.id !== value
      })
    },
    updataMsg (id, name) {
      this.todoList.forEach(item => {
        if (item.id === id) {
          item.name = name
        }
      })
    }
  }
}

</script>
<style scoped>
  .todo_main {
    width: 576px;
    margin-top: 20px;
    border: 1px solid #dddddd;
    border-bottom: 1px solid transparent;
    border-radius: 2px;
  }
</style>
