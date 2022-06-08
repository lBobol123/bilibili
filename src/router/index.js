import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Register = () => import('@/views/register/Register.vue')
const UserInfo = () => import('@/views/userinfo/UserInfo.vue')
const Login = () => import('@/views/login/Login.vue')
const Edit = () => import('@/views/eidt/Edit.vue')
const Home = () => import('@/views/home/Home.vue')
const Article = () => import('@/views/article/Article.vue')
const BackTop = () => import('@/views/practice/BackTop.vue')
const Switch = () => import('@/views/practice/Switch.vue')
const SeeMore = () => import('@/views/practice/SeeMore.vue')
const Echarts = () => import('@/views/practice/Echarts.vue')
const Code = () => import('@/views/practice/Code.vue')
const AndOr = () => import('@/views/practice/AndOr.vue')
const Watch = () => import('@/views/vue/Watch.vue')
const Computed = () => import('@/views/vue/Computed.vue')
const Key = () => import('@/views/vue/Key.vue')
const ListFilterSort = () => import('@/views/vue/ListFilterSort.vue')
const MonitorData = () => import('@/views/vue/MonitorData.vue')
const Filter = () => import('@/views/vue/Filter.vue')
const Instructions = () => import('@/views/vue/Instructions.vue')
const LifeCycle = () => import('@/views/vue/LifeCycle.vue')
const TodoList = () => import('@/views/vue/todoList/TodoList.vue')

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/userinfo',
    component: UserInfo,
    meta: {
      isToken: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      isToken: true
    }
  },
  {
    path: '/article/:id',
    component: Article
  },
  {
    path: '/backtop',
    component: BackTop
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/seemore',
    component: SeeMore
  },
  {
    path: '/echarts',
    component: Echarts
  },
  {
    path: '/code',
    component: Code
  },
  {
    path: '/andOr',
    component: AndOr
  },
  {
    path: '/watch',
    component: Watch
  },
  {
    path: '/computed',
    component: Computed
  },
  {
    path: '/key',
    component: Key
  },
  {
    path: '/listFilterSort',
    component: ListFilterSort
  },
  {
    path: '/monitorData',
    component: MonitorData
  },
  {
    path: '/filter',
    component: Filter
  },
  {
    path: '/instruction',
    component: Instructions
  },
  {
    path: '/lifeCycle',
    component: LifeCycle
  },
  {
    path: '/todoList',
    component: TodoList
  },
  {
    path: '/searchCase',
    component: () => import('@/views/vue/searchCase/SearchCase')
  },
  {
    path: '/open',
    component: () => import('@/views/practice/Open.vue')
  },
  {
    path: '/vuex',
    component: () => import('@/views/vue/vuex/Index')
  },
  {
    path: '/router',
    component: () => import('@/views/vue/router/Router'),
    children: [
      {
        path: 'about', // 跳转的路径
        name: 'about',
        component: () => import('@/views/vue/router/childComps/About'),
        meta: {
          title: '关于'
        }
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/vue/router/childComps/Home'),
        meta: {
          title: '首页'
        },
        children: [
          {
            path: 'news',
            name: 'news', // name属性可以简化跳转的地址书写
            component: () => import('@/views/vue/router/childComps/News'),
            meta: {
              isAuth: true,
              title: '新闻'
            },
            beforeEnter (to, from, next) {
              if (localStorage.getItem('school') !== 'atguigu') {
                alert('暂无此权限')
              } else {
                next()
              }
            }
          },
          {
            path: 'message',
            name: 'message',
            component: () => import('@/views/vue/router/childComps/Message'),
            meta: {
              isAuth: true,
              title: '信息'
            },
            children: [
              {
                path: 'detail',
                name: 'detail',
                component: () => import('@/views/vue/router/childComps/Detail'),
                meta: {
                  title: '详情'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/backstageLogin',
    component: () => import('@/views/vue/backstage/Login.vue')
  },
  {
    path: '/backstageHome',
    redirect: '/backstageHome/users',
    component: () => import('@/views/vue/backstage/Home.vue'),
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/home/users/Users.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/home/rights/Rights.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/home/goods/Goods.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/home/orders/Orders.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/home/settings/Settings.vue')
      }
    ]
  },
  {
    path: '/news',
    redirect: '/news/newsHome',
    component: () => import('@/views/vue/news/NewsApp.vue'),
    children: [
      {
        path: 'newsHome',
        name: 'newsHome',
        component: () => import('@/views/vue/news/home/NewsHome.vue'),
        meta: {
          // isRecoed: true,
          // top: 0
          x: 0,
          y: 0
        }
      },
      {
        path: 'newsUsers',
        name: 'newsUsers',
        component: () => import('@/views/vue/news/users/NewsUsers.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.isToken === true) {
//     router.push('/login')
//     next('/login')
//     Vue.prototype.$msg.fail('请先登录')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuth && localStorage.getItem('school') !== 'atguigu') {
//     alert('暂无权限查看')
//   } else {
//     next()
//   }
// })

// router.afterEach((to, from) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   } else {
//     document.title = 'bilibili2'
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.path === '/backstageHome') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      alert('请先登录')
      next('/backstageLogin')
    }
  } else {
    next()
  }
})

// 解决导航栏中的vue-router重复点tabbar报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router
