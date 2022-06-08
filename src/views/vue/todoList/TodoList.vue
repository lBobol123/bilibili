<template>
  <div class="todo_wrapy">
    <my-header></my-header>
    <my-list></my-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './childComps/MyHeader'
import myList from './childComps/MyList'
import myFooter from './childComps/MyFooter'

export default {
  components: {
    myHeader,
    myFooter,
    myList
  },
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>
<style>
  body {
    background-color: #ffffff;
  }
  .todo_wrapy {
    width: 578px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #dddddd;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin: 0 5px;
    margin-bottom: 0;
    font-size: 14px;
    box-sizing: initial;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn:focus {
    outline: none;
  }
  .btn_danger {
    color: #ffffff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn_danger:focus {
    background-color: #bd362f;
  }
  .btn_edit {
    color: #ffffff;
    background-color: rgb(77, 185, 228);
    border: 1px solid rgb(46, 163, 209);
  }
  .btn_edit:focus {
    background-color: rgb(46, 163, 209);
  }
</style>
