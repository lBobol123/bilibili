import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
  namespaced: true,
  state: {
    personList: []

  },
  getters: {
    getFirstName (state) {
      if (state.personList.length) {
        return state.personList[0].name.slice(0, 1)
      }
    }
  },
  actions: {
    addWangPerson (context, val) {
      if (val.name.indexOf('王') === 0) {
        context.commit('ADDPERSON', val)
      } else {
        alert("姓氏必须是'王'")
      }
    },
    addRandomPerson (context) {
      axios.get('https://api.uixsj.cn/hitokoto/get', {
        params: {
          type: 'social'
        }
      }).then(res => {
        context.commit('ADDRANDOMPERSON', { id: nanoid(), name: res.data })
      },
      err => {
        console.log(err)
      })
    }
  },
  mutations: {
    ADDPERSON (state, value) {
      console.log(state)
      state.personList.unshift(value)
    },
    ADDRANDOMPERSON (state, value) {
      console.log(state)
      state.personList.unshift(value)
    }
  }
}
