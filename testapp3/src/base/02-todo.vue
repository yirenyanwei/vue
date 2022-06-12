<template>
    <div>
        todo
        {{obj2.myname}}
        {{obj.myname}}
        <input type="text" v-model="obj.myname">
        <input type="text" ref="mytextref">
        <button @click="handleClick">add</button>
        <ul>
            <li v-for="data in obj.dataList" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
import {reactive} from 'vue'
export default {
    mounted() {
        console.log(this.$refs.mytextref)
    },
    setup() {
        const obj = reactive({
            myname: 'yanwei',
            dataList: [],
        })
        //可以创建多个 数组、对象都可以
        const obj2 = reactive({
            myname: 'obj2'
        })
        function handleClick() {
            obj.dataList.push(obj.myname)
            obj.myname = ''
        }
        return {
            obj,
            obj2,
            handleClick
        }
    },
}
</script>