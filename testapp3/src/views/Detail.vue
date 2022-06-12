<template>
    <div>
        Detail
    </div>
</template>
<script>
import {onMounted, onUnmounted, inject} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup() {
        const isShow = inject('testShow')
        const route = useRoute()
        const store = useStore()
        onMounted(()=>{
            store.commit('hideTabbar')
            isShow.value = false
            let id = route.params.id
            console.log(id)
        })
        onUnmounted(()=>{
            store.commit('showTabbar')
            isShow.value = true
        })
        return {

        }
    }
}
</script>