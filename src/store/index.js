import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    checkIn: false
  },
  mutations: {
    turnCheckIn (state) {
      state.checkIn = !state.checkIn
    }
  }
})

export default store
