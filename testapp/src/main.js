import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App) // vue支持的新写法
}).$mount('#app')

// 这是注释
const obj = {
  name: 'haha',
  foreName: "yanwei"
}
console.log(obj)
