<template>
    <div>
        <input type="text" ref="mytext">
        <button @click="handleClick">add</button>
        <ul>
            <li v-for="data in dataList" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    setup() {
        //ref 定义变量
        const mytext = ref()
        const dataList = ref([])
        const handleClick = function () {
            dataList.value.push(mytext.value.value)
            mytext.value.value = ''
        }
        return {
            mytext,
            dataList,
            handleClick
        }
    }
}
</script>