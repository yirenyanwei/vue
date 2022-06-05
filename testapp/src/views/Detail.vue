<template>
    <div v-if="filmInfo">
        <i class="iconfont icon-xiajiantou backbtn" @click="handleBack"></i>
        <!-- 滑动显示的头部 -->
        <detail-header v-scroll="50">
            {{filmInfo.name}}
        </detail-header>
        <!-- <img :src="filmInfo.poster" alt=""> -->
        <!-- 动态绑定style -->
        <div :style="{
            backgroundImage: `url(${filmInfo.poster})`,
        }" class="poster"></div>
        <div class="content">
            <div>{{filmInfo.name}}</div>
            <div>
                <div class="detail-text">{{filmInfo.category}}</div>
                <div class="detail-text">{{filmInfo.premiereAt | dataFilter}}上映</div>
                <div class="detail-text">{{filmInfo.nation}}|{{filmInfo.runtime}}分钟</div>
                <div class="detail-text" :class="isHiden?'hiden':''">{{filmInfo.synopsis}}</div>
                <!-- transform只对块生效 -->
                <div style="text-align:center;"><i class="iconfont icon-xiajiantou" @click="isHiden=!isHiden" :style="{
                    transformOrigin: 'center center',
                    display: 'inline-block',
                    transform: isHiden?'rotate(0deg)':'rotate(180deg)'
                }"></i></div>
            </div>
            <!-- 演职人员 -->
            <div>
                <div>演职人员</div>
                <detail-swiper :perview="3.5" name="actors">
                    <detail-swiper-item v-for="data in filmInfo.actors" :key="data.role">
                        <div :style="{
                            backgroundImage: `url(${data.avatarAddress})`,
                        }" class="avator"></div>
                        <div style="text-align:center;font-size:12px">{{data.name}}</div>
                        <div style="text-align:center;font-size:13px">{{data.role}}</div>
                    </detail-swiper-item>
                </detail-swiper>
            </div>
            <!-- 剧照 -->
            <div>
                <div>剧照</div>
                <detail-swiper :perview="2.2" name="photos">
                    <detail-swiper-item v-for="(data,idx) in filmInfo.photos" :key="idx">
                        <div :style="{
                            backgroundImage: `url(${data})`,
                        }" class="avator" @click="handlePreview(idx)"></div>
                    </detail-swiper-item>
                </detail-swiper>
            </div>
        </div>
    </div>
</template>
<script>
import http from '@/util/http.js'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import detailHeader from '@/components/detail/DetailHeader'
import { ImagePreview, Toast } from 'vant' //图片预览
import mixinObj from '@/util/mixinObj'
Vue.directive('scroll', {
    //滚动的指令
    inserted(el, binding) {
        el.style.display = 'none'
        let value = binding.value || 50
        window.onscroll = function() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>=value) {
                el.style.display = 'block'
            }else {
                el.style.display = 'none'
            }
            // console.log('onscroll', scrollTop)
        }
    },
    unbind() {
        window.onscroll = null
    }
})
Vue.filter('dataFilter', data=>{
    return moment(data*1000).format('YYYY-MM-DD')
})
export default {
    mixins: [mixinObj],
    data(){
        return {
            filmInfo: null,
            isHiden:true,
        }
    },
    components: {
        detailSwiper,
        detailSwiperItem,
        detailHeader
    },
    created() {
        //当前匹配的路由
        console.log('created:', this.$route)
        let id = this.$route.params.myid //匹配路由中的动态路由
        http({
            url:`/gateway?filmId=${id}&k=6177393`,
            headers: {
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            console.log(res.data)
            this.filmInfo = res.data.data.film
        })
    },
    mounted() {
    },
    destroyed() {
    },
    methods: {
        handleBack() {
            //返回
            this.$router.back()
        },
        handlePreview(idx) {
            //图片预览
            ImagePreview({
                images: this.filmInfo.photos,
                startPosition: idx,
                closeable: true,
                closeIconPosition: 'top-left'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.backbtn {
    transform-origin: center center;
    display: inline-block;
    transform: rotate(90deg);
    font-size: 1.25rem;
    position: fixed;
    left: .625rem;
    top: 0;
    height: 2.75rem;
    line-height: 2.75rem;
}
.poster{
    width:100%;
    height:13.125rem;
    background-size: cover;
    background-position: center;
}
.content {
    padding: .9375rem;
    .detail-text {
        color: #797d82;
        font-size: 13px;
        margin-top: .25rem;
    }
}
.hiden {
    overflow: hidden;
    height:40px;
}
.avator {
    width: 100%;
    height: 5.3125rem;
    background-position: center;
    background-size: cover;
}
</style>