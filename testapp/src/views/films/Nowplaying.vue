<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in dataList" :key="data" @click="handleClick(data)">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList: ['111','222','333']
        }
    },
    methods: {
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