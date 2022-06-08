export default {
  namespaced: true,
  state: {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
  },
  getters: {
    bigSum (state) {
      return state.sum * 10
    }
  },
  actions: {
    addOdd (context, value) {
      if (context.state.sum % 2) {
        context.commit('ADDODD', value)
      }
    },
    addWait (context, value) {
      setTimeout(() => {
        context.commit('ADDWAIT', value)
      }, 500)
    }
  },
  mutations: {
    INCREMENT (state, value) {
      state.sum += value
    },
    DECREMENT (state, value) {
      state.sum -= value
    },
    ADDODD (state, value) {
      state.sum += value
    },
    ADDWAIT (state, value) {
      state.sum += value
    }
  }
}
