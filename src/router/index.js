import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Register = () => import('@/views/register/Register.vue')
const UserInfo = () => import('@/views/userinfo/UserInfo.vue')
const Login = () => import('@/views/login/Login.vue')
const Edit = () => import('@/views/eidt/Edit.vue')
const Home = () => import('@/views/home/Home.vue')
const Article = () => import('@/views/article/Article.vue')
const Vuex = () => import('@/views/practice/Vuex.vue')
const BackTop = () => import('@/views/practice/BackTop.vue')
const Switch = () => import('@/views/practice/Switch.vue')
const SeeMore = () => import('@/views/practice/SeeMore.vue')
const Echarts = () => import('@/views/practice/Echarts.vue')
const Code = () => import('@/views/practice/Code.vue')

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
    path: '/vuex',
    component: Vuex
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
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.isToken === true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请先登录')
  } else {
    next()
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
