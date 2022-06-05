<template>
    <div>
        <!-- select 点击索引栏的字符时触发 -->
        <van-index-bar :index-list="computedIndex" @select="handleChange">
            <div v-for="data in cityList" :key="data.type">
                <van-index-anchor :index="data.type" />
                <van-cell v-for="item in data.list" :key="item.cityId"  :title="item.name" @click="handleClick(item)"/>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import http from '@/util/http'
import {Toast} from 'vant'
import mixinObj from '@/util/mixinObj'
export default {
    mixins: [mixinObj], //混入
    data() {
        return {
            cityList: [],
        }
    },
    computed: {
        //计算属性
        computedIndex() {
            return this.cityList.map(item=>item.type)
        }
    },
    mounted() {
        http({
            url: '/gateway?k=319725',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            console.log(res.data)
            this.cityList = this.renderCities(res.data.data.cities)
        })
    },
    methods: {
        renderCities(cities) {
            let cityList = []
            let aIdx = 'A'.charCodeAt(0)
            for(let i = aIdx; i<='Z'.charCodeAt(0); i++) {
                let c = String.fromCharCode(i)
                cityList.push({
                    type: c,
                    list: []
                })
            }
            for(let item of cities) {
                let c = item.pinyin.substring(0, 1).toUpperCase()
                let idx = c.charCodeAt(0)-aIdx
                cityList[idx].list.push(item)
            }
            cityList = cityList.filter(item=>item.list.length>0)
            return cityList
        },
        //点击索引栏的字符时触发
        handleChange(index) {
            Toast(index)
        },
        //click item
        handleClick(item) {
            //多页面共享数据方案
            /**
             * 传统多页面开发
             * 1、cookies localStorage
             * 2、location.href = '#/cinemas?cityname="gz"'
             * 
             * 单页面开发
             * 1、中间人模式
             * 2、bus时间总线
             * 
             * vuex 状态管理模式
             */
            this.$store.commit('changeCityName', item.name)
            this.$store.commit('changeCityId', item.cityId)
            //清空cinemaList
            this.$store.commit('changeCinemaData', [])
            this.$router.back()
        }
    }
}
</script>