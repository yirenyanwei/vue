<template>
    <div>
        <!-- immediate-check	是否在初始化时立即执行滚动位置检查 -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check='false'
            >
            <van-cell v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <div>
                    <div class="title">{{data.name}}</div>
                    <div class="content">
                        <div :class="data.grade?'':'hidden'">观众评分:<span style="color:orange;">{{data.grade}}</span></div>
                        <div class="actors">主演:{{data.actors | actorsFilter}}</div>
                        <div>{{data.nation}} | {{data.runtime}}分钟</div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
Vue.filter('actorsFilter', (actors)=>{
    //处理演员
    if(actors == undefined) {
        return '暂无主演'
    }
    let names = actors.map(item=>item.name).join(' ')
    return names

})
export default {
    data() {
        return {
            dataList: [],
            loading: false,
            finished: false,
            current: 0,
        }
    },
    mounted() {
        this.onLoad()
    },
    methods: {
        onLoad() {
            console.log('到底了')
            this.current++
            http({
                url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3903640`,
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                this.dataList = [...this.dataList, ...res.data.data.films]
                // 加载状态结束
                this.loading = false;
                if(this.dataList.length>=res.data.data.total) {
                    this.finished = true
                }
            })
        },
        handleClick(id){
            //编程式导航
            // location.href = '#/detail'//boom方式
            //vue跳转方式 
            //1、通过路径跳转
            // this.$router.push(`/detail/${id}`)
            //2、听过命名路由跳转
            this.$router.push({
                name: 'filmDetail',
                params: {
                    myid: id
                }
            })

        }
    }
}
</script>
<style lang="scss" scoped>
    .van-list {
        .van-cell {
            padding: .9375rem;
            overflow: hidden;
            img {
                float: left;
                width: 4.125rem;
            }
            .title {
                font-size: 16px;
            }
            .content {
                font-size: 13px;
                color: gray;
                .actors {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 12.5rem;
                }
            }
        }
    }
    .hidden {
        visibility: hidden;
    }
</style>