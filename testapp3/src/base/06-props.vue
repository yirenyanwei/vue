<template>
    <div>
        通信
        <navbar myname="home" myid="123" @myevent="obj.isShow = !obj.isShow"></navbar>
        <sidebar v-show="obj.isShow"></sidebar>
    </div>
</template>
<script>
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'
import {reactive} from 'vue'
export default {
    setup() {
        const obj = reactive({
            isShow: true,
        })
        return {
            obj,
        }
    },
    components: {
        navbar,
        sidebar
    }
}
</script>