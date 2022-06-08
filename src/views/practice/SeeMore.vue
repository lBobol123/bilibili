<template>
  <div>
    <div>
      <div class="content">{{text}}</div>
      <button v-show="isShowDown && isShowUp" @click="toDown">展开</button>
      <button v-show="isShowDown && !isShowUp" @click="toUp">收起</button>
    </div>
    <!-- <div class="order" v-for="(item, index) of list" :key="index" v-show="isOpen || index < max">
      <div class="order_item">{{item}}</div>
    </div>
    <div class="see_more" v-show="!isOpen && list.length > max" @click="isOpen = !isOpen">查看更多</div>
    <div class="see_more" v-show="isOpen && list.length > max" @click="isOpen = !isOpen">收起</div> -->
    <div v-for="(item, index) in list" :key="index" v-show="!isOpen || index < max">
      <div class="order_item">{{item}}</div>
    </div>
    <div class="see_more" v-if="list.length > max" @click="isOpen = !isOpen">{{isOpen ? '展开全部选项' : '收起'}}</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  // data () {
  //   return {
  //     text1: '该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。',
  //     text: '',
  //     isShowDown: false,
  //     isShowUp: true,
  //     list: ['餐饮特产订单', '保险订单', '酒店订单', '空铁联运订单', '计次定期票订单', '约车订单', '出站引导服务订单', '铁路商城订单', '汽车片订单', '旅游订单'],
  //     max: 6,
  //     isOpen: false
  //   }
  // },
  // created () {
  //   this.showtext()
  // },
  // methods: {
  //   showtext () {
  //     if (this.text1.length <= 100) {
  //       this.text = this.text1
  //     } else {
  //       this.text = this.text1.slice(0, 101) + '...'
  //       this.isShowDown = true
  //     }
  //   },
  //   toDown () {
  //     this.isShowUp = false
  //     this.text = this.text1
  //   },
  //   toUp () {
  //     this.isShowUp = true
  //     this.text = this.text1.slice(0, 101) + '...'
  //   }
  // }
  data () {
    return {
      text: '',
      completeText: '该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。',
      isShowDown: true,
      isShowUp: true,
      list: ['餐饮特产订单', '保险订单', '酒店订单', '空铁联运订单', '计次定期票订单', '约车订单', '出站引导服务订单', '铁路商城订单', '汽车片订单', '旅游订单'],
      isOpen: true,
      max: 6
    }
  },
  created () {
    this.showText()
  },
  methods: {
    showText () {
      if (this.completeText.length <= 100) {
        this.text = this.completeText
        this.isShowDown = false
      } else {
        this.text = this.completeText.slice(0, 100) + '...'
      }
    },
    toDown () {
      this.text = this.completeText
      this.isShowUp = false
    },
    toUp () {
      this.text = this.completeText.slice(0, 100) + '...'
      this.isShowUp = true
    }
  }
}

</script>
<style scoped>
.content {
  text-indent: 2em;
}
.order_item {
  padding: 5px;
  border-bottom: 1px solid lightblue;
}
.see_more {
  padding: 5px;
  border-bottom: 1px solid lightblue;
  text-align: center;
}
</style>
