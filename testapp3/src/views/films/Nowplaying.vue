<template>
    <div>
        Nowplaying
        <ul>
            <li v-for="data in filmList" :key="data.filmId" @click="handleChangePage(data.filmId)">
                {{data.name}}
                <div>
                    {{actorFilter(data.actors)}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import {reactive, onMounted, toRefs} from 'vue'
import {useRouter} from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const obj = reactive({
            filmList: [],
        })
        onMounted(()=>{
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1635646',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873"}',
                    'X-Host': 'mall.film-ticket.film.list',
                }
            }).then(res=>{
                console.log(res.data)
                obj.filmList = res.data.data.films
            })
        })
        function handleChangePage(filmId) {
            console.log(filmId)
            router.push(`/detail/${filmId}`)
        }
        function actorFilter(actors) {
            if(actors == undefined) {
                return '暂无主演'
            }
            return actors.map(data=>data.name).join(' ')
        }
        return {
            ...toRefs(obj),
            handleChangePage,
            actorFilter
        }
    },
}
</script>