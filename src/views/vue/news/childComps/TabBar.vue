<template>
  <div class="tab_wrapper">
    <div class="tab_item"
         v-for="(item, index) in tabbarList"
         :key="item.id"
         @click="tabBarClick(item.routeName, index)">
      <img v-show="currentIndex !== index" :src="item.img" alt="">
      <img v-show="currentIndex === index" :src="item.activeImg" alt="">
      <div :class="[{'activeName': currentIndex === index}]">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  },
  data () {
    return {
      tabbarList: [
        {
          id: '001',
          title: '首页',
          routeName: 'newsHome',
          img: require('@/assets/img/tabbar/home.svg'),
          activeImg: require('@/assets/img/tabbar/home_active.svg')
        },
        // {
        //   id: '002',
        //   title: '分类',
        //   routeName: 'newsCategory',
        //   img: require('@/assets/img/tabbar/category.svg'),
        //   activeImg: require('@/assets/img/tabbar/category_active.svg')
        // },
        // {
        //   id: '003',
        //   title: '购物车'
        //   routeName: 'newsShopcart',
        //   img: require('@/assets/img/tabbar/shopcart.svg'),
        //   activeImg: require('@/assets/img/tabbar/shopcart_active.svg')
        // },
        {
          id: '004',
          title: '我的',
          routeName: 'newsUsers',
          img: require('@/assets/img/tabbar/profile.svg'),
          activeImg: require('@/assets/img/tabbar/profile_active.svg')
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    tabBarClick (routerName, index) {
      this.$router.replace({ name: routerName })
      this.currentIndex = index
    }
  }
}

</script>
<style scoped>
.tab_wrapper {
  height: 58px;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding-bottom: 3px;
}
.tab_item {
  flex: 1;
  text-align: center;
}
.tab_item img {
  width: 28px;
  height: 28px;
}
.activeName {
  color: #ff5777;
}
</style>
