<template>
    <div>
        <button @click="handleShow">left</button>
        navbar--{{myname}}
        <button>right</button>
    </div>
</template>
<script>
export default {
    props: {
        myname: {
            type: String,
            default: ''
        },
        myid: {
            type: String,
            default: ''
        }
    },
    mounted(){
        //vue2
        console.log(this.myid)
    },
    setup(props, {emit}) {
        //取props
        console.log(props, props.myid)
        const handleShow = function () {
            emit('myevent')
        }
        return {
            handleShow
        }
    }
}
</script>