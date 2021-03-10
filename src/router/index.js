import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Register = () => import('@/views/register/Register.vue')
const UserInfo = () => import('@/views/userinfo/UserInfo.vue')
const Login = () => import('@/views/login/Login.vue')
const Edit = () => import('@/views/eidt/Edit.vue')
const Home = () => import('@/views/home/Home.vue')
const Article = () => import('@/views/article/Article.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
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
  }
]

const router = new VueRouter({
  mode: 'history',
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
