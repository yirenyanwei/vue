<template>
    <div class="header">
        <i class="iconfont icon-xiajiantou" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods: {
        handleBack() {
            //返回
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
    .header {
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        background-color: white;
        text-align: center;
        i {
            transform-origin: center center;
            display: inline-block;
            transform: rotate(90deg);
            font-size: 1.25rem;
            position: fixed;
            left: .625rem;
            top: 0;
            height: 2.75rem;
            line-height: 2.75rem;
        }
    }
</style>