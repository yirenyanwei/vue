import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, //this.$router 访问
  store, //this.$store 访问
  render: h => h(App) // vue支持的新写法
}).$mount('#app')

