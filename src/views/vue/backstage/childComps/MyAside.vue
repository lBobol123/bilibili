<template>
  <ul class="menu">
    <li
      :class="['menu_item', {'active_item': currentIndex === index}]"
      v-for="(item, index) in menuList"
      :key="index"
      @click="menuItemClick(item, index)">{{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      // menuList: ['用户管理', '权限管理', '商品管理', '订单管理', '系统管理'],
      menuList: [
        {
          name: '用户管理',
          path: 'users'
        },
        {
          name: '权限管理',
          path: 'rights'
        },
        {
          name: '商品管理',
          path: 'goods'
        },
        {
          name: '订单管理',
          path: 'orders'
        },
        {
          name: '系统设置',
          path: 'settings'
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    menuItemClick (item, index) {
      this.$router.push({
        name: item.path
      })
      this.currentIndex = index
    }
  }
}

</script>
<style scoped>
.menu {
  width: 200px;
  height: calc(100% - 50px);
  font-size: 18px;
  font-weight: 600;
  border-right: 1px solid #f4f4f4;
  /* background-color: #021422; */
}
.menu_item {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  cursor: pointer;
}
.menu .active_item {
  background-color: rgba(135, 206, 235);
  color: #ffffff;
  border-left: 5px solid rgb(235, 99, 99);
}
/* .menu_item:hover {
  background-color: rgba(135, 206, 235);
  color: #ffffff;
  border-left: 5px solid rgb(235, 99, 99);
} */
</style>
