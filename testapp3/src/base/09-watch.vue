<template>
    <div>
        <input type="text" v-model="obj.mytext">
        <ul>
            <li v-for="data in obj.dataList" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
import {reactive, watch} from 'vue'
export default {
    setup() {
        const obj = reactive({
            mytext: '',
            dataList:['aaa', 'aab', 'bbb'],
            oldList:['aaa', 'aab', 'bbb']
        })
        //watch mytext
        watch(()=>obj.mytext, ()=>{
            console.log('watch', obj.dataList)
            obj.dataList = obj.oldList.filter(item=>item.includes(obj.mytext))
        })
        return {
            obj,
        }

    },
}
</script>