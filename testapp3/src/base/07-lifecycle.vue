<template>
    <div>
        声明周期
        {{obj.list}}
    </div>
</template>
<script>
import axios from 'axios'
import {reactive, onMounted, onUpdated} from 'vue'
export default {
    setup() {
        const obj = reactive({
            list: []
        })
        onMounted(()=>{
            console.log('dom 解析完成')
            setTimeout(()=>{
                obj.list = [1,2,3]
            }, 1000)
        })
        onUpdated(()=>{
            console.log('dom update')
        })
        return {
            obj
        }
    },
}
</script>