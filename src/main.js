import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Toast } from 'vant'
import echarts from 'echarts'
import 'vant/lib/index.css'
import http from './network'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
