<template>
  <div>
      <film-swiper :key="dataList.length">
        <film-swiper-item class="filmSwiperItem" v-for="data in dataList" :key="data.bannerId">
          <img :src="data.imgUrl" alt="">
        </film-swiper-item>
      </film-swiper>
      <div>
      <film-header class="sticky"></film-header>
      <!-- 二级路由根组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import filmHeader from '@/components/films/FilmHeader'
import axios from 'axios'
export default {
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
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
  .sticky {
    position: sticky;
    top: 0px;
    background: white;
    z-index: 100;
  }
</style>
