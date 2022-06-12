<template>
    <div>
        hello -vue3 新写法
        {{obj.myname}}
        <button @click="handleClick">change</button>
    </div>
</template>
<script>
import {reactive} from 'vue'
export default {
    //代替beforeCreate、created声明周期
    setup() {
        console.log('setup')
        //定义状态
        const obj = reactive({
            myname: 'yanwei',
            myage: 100,
        })
        const handleClick = function() {
            console.log('handleClick')
            obj.myname = 'change'
        }
        return {
            obj,
            handleClick
        }
    },
}
</script>