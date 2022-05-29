<template>
  <div>
    this is a test
    {{myname}}
    <br>
    <input type="text" v-model="mytext">
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="data in dataList" :key="data">
        {{data}}
      </li>
    </ul>
    <!-- 属性传递，插槽都一样 -->
    <navbar myname="home" :myright="false" @myevent="handleEvent">
      <div>this is slots</div>
    </navbar>
    <sidebar v-show="isShow"></sidebar>

    <!-- 指令 -->
    <div v-hello="'name'">directive</div>
    <!-- 过滤器 -->
    <img :src="imgURL | imgFilter" alt="">
  </div>
</template>

<script>
// @ 别名，永远指向src的绝对路径  ./components/Navbar->@/components/Navbar
import navbar from "@/components/Navbar" //导入的是一个组件的大对象
import sidebar from "./components/Sidebar"
import Vue from "vue"
import axios from "axios"
//全局注册组件
Vue.component('navbar', navbar)
//指令
Vue.directive('hello', {
  inserted(el, binding) {
    console.log('inserted', el, binding)
    el.style.border = '1px solid black'
  }
})
//过滤器
Vue.filter('imgFilter', (url)=>{
  console.log('filter')
  return url
})
//es6导出 babel(es6-es5)
export default {
  data() {
    return {
      dataList: [],
      myname: 'yanwei',
      mytext: '',
      isShow: true,
      imgURL: 'https://pic.maizuo.com/usr/movie/594ded98490b61549be7ecb5a9355b79.jpg'
    }
  },
  methods: {
    handleAdd() {
      this.dataList.push(this.mytext)
    },
    handleEvent() {
      this.isShow = !this.isShow
    }
  },
  components: {
    //局部注册组件
    sidebar
  },
  mounted() {
    axios.get('/maoyan/ajax/moreCinemas?movieId=0&day=2022-05-24&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1653399166559&cityId=1&optimus_uuid=070EC520DB5E11EC867209BEBDFA5E4291BE97376C0240709AA263E017B39528&optimus_risk_level=71&optimus_code=10')
      .then(res=>{
        console.log(res)
      })
  }
}
</script>

<style lang="scss">
// 父组件会覆盖孩子的样式
$width: 300px;
ul {
  li {
    background: yellow;
    width: $width;
  }
}
</style>
