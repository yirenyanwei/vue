<template>
    <div>
        --ref 新的写法
        {{myname}}
        <input type="text" ref="mytextref">
        <button @click="handleClick">click</button>
    </div>
</template>
<script>
import {reactive, ref} from 'vue'
export default {
    setup() {
        const obj = reactive({

        })
        const mytextref = ref()
        const myname = ref('yanwei') //对.value进行拦截
        function handleClick() {
            //mytextref.value 绑到组件获取组件对象，绑到dom获取dom节点
            console.log(mytextref.value.value)
            myname.value = 'xiaohong'
        }
        return {
            obj,
            mytextref,
            myname,
            handleClick
        }
    },
}
</script>