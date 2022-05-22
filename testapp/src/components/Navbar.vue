<template>
    <div>
        <button @click="handleClick">left</button>
        navbar--{{myname}}
        <button v-show="myright">right</button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        myname: String,
        myright: Boolean,
    },
    methods: {
        handleClick(){
            this.$emit('myevent')
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    background: #f60;
}
</style>
