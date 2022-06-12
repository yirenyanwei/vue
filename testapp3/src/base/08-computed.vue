<template>
    <div>
        <input type="text" v-model="obj.mytext">
        <ul>
            <li v-for="data in computedList" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
import {reactive, computed} from 'vue'
export default {
    setup() {
        const obj = reactive({
            mytext: '',
            dataList:['aaa', 'aab', 'bbb']
        })
        //普通方法
        const filterList = function () {
            return obj.dataList.filter(item=>item.includes(obj.mytext))
        }
        //计算属性
        const computedList = computed(()=>{
            return obj.dataList.filter(item=>item.includes(obj.mytext))
        })
        return {
            obj,
            filterList,
            computedList
        }

    },
}
</script>