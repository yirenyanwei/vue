<template>
    <div>
        sidebar
        <ul>
            <li v-for="data in dataList" :key="data.filmId">
                {{data.name}}
            </li>
        </ul>

    </div>
</template>
<style lang="scss" scoped>
// scoped能保持局部作用域，不被父类覆盖 原理是给子组件加上唯一的属性
$width: 300px;
ul {
  li {
    background: red;
    width: $width;
  }
}
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            dataList: [],
        }
    },
    mounted() {
        console.log('mounted')
        //fetcch
        // fetch('/maizuo.json')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         console.log(res.data.films)
        //         this.dataList = res.data.films
        //     })

        //axios
        axios.get('/maizuo.json')
            .then(res=>{
                this.dataList = res.data.data.films
            })
    }
}
</script>
