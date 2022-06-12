<template>
    <div>
        hello -vue3 新写法
        {{myname}}
        <button @click="handleClick">change</button>
    </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
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
        const refs = toRefs(obj)
        console.log(refs)
        return {
            ...refs,
            handleClick
        }
    },
}
</script>