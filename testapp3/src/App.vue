<template>
  <div>
    hello vue3
    <div style="background-color:red;" v-show="isShow">test header</div>
    <ul v-show="$store.state.isTabbarShow">
      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'bottom-active' : ''">
          <i class="iconfont icon-dianying"></i>
          <span>电影</span>
        </li>
      </router-link>
      <!-- vue-router 4.x的写法 v-slot插槽的写法，传一个对象 navigate点击回调  isActive是否选中 -->
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'bottom-active' : ''">
          <i class="iconfont icon-yingyuan"></i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'bottom-active' : ''">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import {ref, provide} from 'vue'
export default {
  setup() {
    const isShow = ref(true)
    provide('testShow', isShow)
    return {
      isShow
    }
  },
  data() {
    return {
      mytext: "",
    };
  },
  // 局部组件
  components: {},
  // 局部指令
  directives: {
    hello: {
      mounted(el, bunding) {
        el.style.backgroundColor = bunding.value;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
  .bottom-active {
    color: red;
  }
</style>