<template>
    <div>
      <!-- 头部 -->
      <van-nav-bar title="标题" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
        <template #left>
          {{$store.state.cityName}}<van-icon name="arrow-down" color="black"/>
        </template>
        <template #right>
          <van-icon name="search" size="18" color="black"/>
        </template>
      </van-nav-bar>

      <div class="box" :style="{
        height:height
      }">
        <ul>
          <li v-for="data in $store.state.cinemaList" :key="data.cinemaId">
            <div class="left">
              <div class="cinema-name">{{ data.name }}</div>
              <div class="cinema-text">{{ data.address }}</div>
            </div>
            <div class="right cinema-name">
              <div style="color: orange">￥{{ data.lowPrice / 100 }}起</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import BetterScroll from "better-scroll"
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  data() {
    return {
      height: '0px'
    };
  },
  mounted() {
    //动态计算高度
    let topHeight = this.$refs.navbar.$el.offsetHeight
    let bottomHeight = document.querySelector('footer').offsetHeight
    this.height = document.documentElement.clientHeight-topHeight-bottomHeight + 'px'

    //获取影院数据
    if(this.$store.state.cinemaList.length<=0) {
      this.$store.dispatch('getCinemaData')
      .then(res=>{
        this.initBetterScroll()
      })
    }else {
      this.initBetterScroll()
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=2089115`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   console.log("cinema.list", res.data);
    //   this.cinemaList = res.data.data.cinemas;
    //   //渲染完界面之后初始化
    //   this.$nextTick(()=>{
    //     new BetterScroll('.box', {
    //       scrollbar: {
    //         fade: true,

    //       }
    //     })
    //   })
    // });
  },
  computed: {
    //vuex新语法 用的时候 this.cinemaList==this.$store.state.cinemaList
    ...mapState(['cinemaList']),
  },
  methods: {
    ...mapActions(['getCinemaData']),
    ...mapMutations(['changeCinemaData']),
    handleLeft() {
      //点击左边按钮
      this.$router.push('/city')
    },
    handleRight() {
      //点击右边按钮
      this.$router.push('cinemas/search')
    },
    //优化scroll
    initBetterScroll() {
      this.$nextTick(()=>{
        new BetterScroll('.box', {
          scrollbar: {
            fade: true,
          }
        })
      })
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  padding: 0.9375rem;
  display: flex;
  justify-content: space-between;
  .left {
    width: 13.25rem;
  }
  .cinema-name {
    font-size: 15px;
  }
  .cinema-text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.box{
  overflow: hidden;
  width: 100%;
  background-color: white;
  //修正滚动条位置
  position: relative;
}
</style>