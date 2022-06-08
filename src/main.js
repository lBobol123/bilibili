import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import { Toast, List, PullRefresh } from 'vant'
import echarts from 'echarts'
import 'vant/lib/index.css'
import { http } from './network'
import dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import _ from 'lodash'

Vue.use(plugins).use(List).use(PullRefresh)

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.prototype.$echarts = echarts
Vue.prototype._ = _
dayjs.extend(isLeapYear)
Vue.prototype.$dayjs = dayjs

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm。
  }
}).$mount('#app')
