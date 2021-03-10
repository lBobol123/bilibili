<template>
  <div id="home">
    <nav-bar ref="homeNav" class="home_nav"></nav-bar>
    <van-tabs v-model="active" swipeable :sticky="true"
              offset-top="44px" :animated="true"
              color="#fb7299" title-active-color="#fb7299">
      <van-tab v-for="item in category" :title="item.title" :key="item.index">
        <van-list v-model="item.loading" :immediate-check="false"
                  :finished="item.finished"
                  finished-text="我也是有底线的"
                  @load="onLoad" >
          <div class="detail_parent">
            <home-detail class="detail_item" v-for="detailItem in item.list"
                        :detailItem="detailItem"
                        :key="detailItem.index"  />
        </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import HomeDetail from './childComps/HomeDetail'

export default {
  components: {
    NavBar,
    HomeDetail
  },
  data () {
    return {
      category: [],
      active: 0
    }
  },
  created () {
    this.getCategory()
  },
  watch: {
    active () {
      this.getCategoryInfo()
    }
  },
  activated () {
    this.$refs.homeNav.getnavUserImg()
  },
  methods: {
    async getCategory () {
      const res = await this.$http.get('/category')
      this.category = res.data.map(item => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.loading = false
        item.finished = false
        return item
      })
      // console.log(this.category)
      this.getCategoryInfo()
    },
    async getCategoryInfo () {
      const categoryActive = this.categoryActive()
      const res = await this.$http.get('/detail/' + categoryActive._id, {
        params: {
          page: categoryActive.page,
          pagesize: categoryActive.pagesize
        }
      })
      categoryActive.list.push(...res.data)
      categoryActive.loading = false
      if (res.data.length < categoryActive.pagesize) {
        categoryActive.finished = true
      }
      // console.log(categoryActive)
      // console.log(res)
    },
    categoryActive () {
      const categoryActive = this.category[this.active]
      return categoryActive
    },
    onLoad () {
      setTimeout(() => {
        const categoryActive = this.categoryActive()
        categoryActive.page += 1
        this.getCategoryInfo()
      }, 500)
    }
  }
}

</script>
<style scoped>
  #home {
    background-color: #fff;
  }
  .home_nav {
    position: sticky;
    top: 0;
    z-index: 9;
  }
  .detail_parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
