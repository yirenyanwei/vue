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
  </div>
</template>

<script>
import navbar from "./components/Navbar" //导入的是一个组件的大对象
import sidebar from "./components/Sidebar"
import Vue from "vue"
//全局注册组件
Vue.component('navbar', navbar)
//es6导出 babel(es6-es5)
export default {
  data() {
    return {
      dataList: [],
      myname: 'yanwei',
      mytext: '',
      isShow: true,
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
