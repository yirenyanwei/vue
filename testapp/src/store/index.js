import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  //持久化
  plugins: [createPersistedState({
    reducer(state) {
      return {//选择存储的属性,默认全部存储
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  //公共状态
  state: {
    cityId: '440100',
    cityName: '广州',
    cinemaList: [],
    isTabbarShow: true,
  },
  getters: {
  },
  //改变公共状态的方法，被devTool记录状态的修改 只支持同步
  mutations: {
    changeCityName(state, cityName) {
      state.cityName = cityName
    },
    changeCityId(state, cityId) {
      state.cityId = cityId
    },
    changeCinemaData(state, list) {
      state.cinemaList = list
    },
    showTabbar(state) {
      state.isTabbarShow = true
    },
    hideTabbar(state) {
      state.isTabbarShow = false
    }
  },
  //支持异步
  actions: {
    getCinemaData(store) {
      return http({
        url: `/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=2089115`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        console.log("cinema.list", res.data);
        store.commit('changeCinemaData', res.data.data.cinemas)
      });
    }
  },
  modules: {
  }
})
