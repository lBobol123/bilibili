import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    name: '于学博',
    sex: '男',
    from: '华夏'
  },
  mutations: {
    increment (state, param) {
      state.count++
    },
    decrement (state, param) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
