<template>
    <div>
        detial
    </div>
</template>
<script>
export default {
    created() {
        //当前匹配的路由
        console.log('created:', this.$route)
        let id = this.$route.params.myid //匹配路由中的动态路由

    }
}
</script>