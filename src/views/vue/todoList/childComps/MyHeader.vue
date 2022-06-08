<template>
  <div class="todo_header">
    <input type="text" placeholder="请输入你的任务名称，按回车健确认" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    add (e) {
      if (!e.target.value.trim()) return
      const todoObj = {
        id: nanoid(),
        name: e.target.value,
        done: false
      }
      this.$bus.$emit('addTodoList', todoObj)
      e.target.value = ''
    }
  }
}

</script>
<style scoped>
  .todo_header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo_header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 10px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236 0.6);
  }
</style>
