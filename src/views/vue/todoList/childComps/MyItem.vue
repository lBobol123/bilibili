<template>
  <li>
    <label :for="todoObj.id">
      <input style="margin-right: 8px" type="checkbox" :id="todoObj.id"
             :checked="todoObj.done"
             @change="$emit('stateChange', todoObj.id)" />
      <span v-show="!todoObj.edit">{{todoObj.name}}</span>
      <input v-show="todoObj.edit"
             ref="editInput"
             type="text"
             @blur="inputBlur(todoObj, $event)"
             :value="todoObj.name"/>
    </label>
    <div class="btn_wrappy">
      <button class="btn btn_edit" @click="childEditTodo(todoObj)">编辑</button>
      <button class="btn btn_danger" @click="childDelectTodo">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  components: {
  },
  props: ['todoObj'],
  data () {
    return {
    }
  },
  methods: {
    childEditTodo (todo) {
      if (!Object.prototype.hasOwnProperty.call(todo, 'edit')) {
        this.$set(todo, 'edit', true)
      } else {
        todo.edit = true
      }
      this.$nextTick(() => {
        this.$refs.editInput.focus()
      })
    },
    childDelectTodo () {
      if (confirm('确认删除么？')) {
        this.$emit('delectTodo', this.todoObj.id)
      }
    },
    inputBlur (todo, e) {
      todo.edit = false
      if (e.target.value.trim() === '') return
      this.$emit('updataMsg', todo.id, e.target.value)
    }
  }
}

</script>
<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #dddddd;
}
li button {
  display: none;
}
li:hover {
  background-color: #dddddd;
}
li:hover button {
  display: block;
}
.btn_wrappy {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
