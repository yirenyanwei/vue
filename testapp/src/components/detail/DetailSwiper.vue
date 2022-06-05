<template>
    <div class="swiper" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default {
    props: {
        perview: {
            type: Number,
            default: 1
        },
        name: {
            type: String,
            default: 'swiper'
        }
    },
    mounted() {
        this.initSwiper()
    },
    methods: {
        initSwiper() {
            //一个界面中公用多个轮播的时候，注意处理下传入的class
            var mySwiper = new Swiper ('.'+this.name, {  
                slidesPerView: this.perview,//一页显示几个
                spaceBetween: 30,//间距
                freeMode: true,//自由模式
            })
        }
    }
}
</script>