<template>
  <div>
    <h1>Vue Router Demo</h1>
    <button>后退</button>
    <button>前进</button>
    <button @click="localClick">存本地</button>
    <div class="second_router">
      <div class="second_router_title">
        <!-- <div class="title_item" active-class="active" @click="$router.push('/router/about')">About</div>
        <div class="title_item" active-class="active" @click="$router.push('/router/home')">Home</div> -->
        <div v-for="(item) in titleList" :key="item.title" :class="['title_item', {'active': currentName === item.name}]" @click="titleClick(item.name)">
          {{item.title}}
        </div>
        <!-- <router-link class="title_item" active-class="active" to="/router/about">About</router-link>
        <router-link class="title_item" active-class="active" to="/router/home">Home</router-link> -->
      </div>
      <div class="second_router_detail">
        <keep-alive include="Home">
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Router',
  components: {},
  data () {
    return {
      titleList: [
        { title: 'About', name: 'about' },
        { title: 'Home', name: 'home' }
      ],
      currentName: 'about'
    }
  },
  watch: {
    $route (val) {
      const res = val.path.match(/\//g).length || 0
      console.log(val.path)
      if (['a', 'h'].includes(val.path.charAt(8)) && res === 2) {
        this.currentName = val.name
      }
    }
  },
  methods: {
    localClick () {
      localStorage.setItem('school', 'atguigu')
    },
    titleClick (name) {
      // this.currentName = name
      this.$router.push({ name })
    }
  }
}
</script>
<style scoped>
.second_router {
  display: flex;
  padding-top: 20px;
  border-top: 2px solid skyblue;
}
.title_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  margin: 0 30px;
  border-radius: 5px;
  cursor: pointer;
}
.active {
  color: #ffffff;
  background-color: #2c76b9;
}
</style>
