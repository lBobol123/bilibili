<template>
  <div class="footer">
    <div class="footer_left">
      <label for="selectInput">
        <!-- <input type="checkbox" :checked="isAll" @click="selectAllChange" id="selectInput"> -->
        <input type="checkbox" v-model="isAll" id="selectInput">
        <span>已完成{{doneNum}}/全部{{totalNum}}</span>
      </label>
    </div>
    <button class="btn btn_danger" @click="clearDoneTast">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      totalNum: 0,
      doneNum: 0
    }
  },
  created () {
    // 把数据的总长度的事件放在事件总线上
    this.$bus.$on('todoListLen', data => {
      this.totalNum = data
    })
    // 把勾选数据的长度的事件放在事件总线上
    this.$bus.$on('todoDoneLen', data => {
      this.doneNum = data
    })
  },
  mounted () {
  },
  beforeDestroy () {
    this.$bus.$on('todoListLen')
    this.$bus.$on('todoDoneLen')
  },
  computed: {
    isAll: {
      get () {
        return this.totalNum === this.doneNum && this.totalNum > 0
      },
      set (value) {
        return this.$bus.$emit('isSelectAllChange', value)
      }
    }
  },
  methods: {
    // selectAllChange () {
    //   this.$bus.$emit('isSelectAllChange', this.isAll)
    // },
    clearDoneTast () {
      if (confirm('确认清除已完成的任务么？')) {
        this.$bus.$emit('clearAllDone')
      }
    }
  }
}

</script>
<style scoped>
  .footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  }
  .footer_left input {
    margin-right: 20px;
  }
</style>
