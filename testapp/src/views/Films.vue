<template>
  <div>
    <film-swiper :key="dataList.length">
      <film-swiper-item class="filmSwiperItem" v-for="data in dataList" :key="data.bannerId">
        <img :src="data.imgUrl" alt="">
      </film-swiper-item>
    </film-swiper>
    <div>
      <div>
        二级声明式导航
      </div>
      <!-- 二级路由根组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import axios from 'axios'
export default {
  components: {
    filmSwiper,
    filmSwiperItem
  },
  data(){
    return {
      dataList: []
    }
  },
  mounted() {
    axios.get('/banner.json')
    .then(res=>{
      this.dataList = res.data.banner
    })
  }
}
</script>
<style lang="scss" scoped>
  .filmSwiperItem {
    img {
      width: 100%;
    }
  }
</style>
