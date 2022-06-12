import { createStore } from 'vuex'

export default createStore({
  state: {
    isTabbarShow: true,
  },
  getters: {
  },
  mutations: {
    showTabbar(state) {
      state.isTabbarShow = true
    },
    hideTabbar(state) {
      state.isTabbarShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
