<template>
    <div>
        login
        <button @click="handleLogin">登录</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleLogin() {
            setTimeout(()=>{
                localStorage.setItem('token', JSON.stringify({data: 'yanwei'}))
                // this.$router.back() //返回
                //获取路由拦截中query字段
                let redirect = this.$route.query.redirect || '/center'
                this.$router.push(redirect)
            }, 2000)
        }
    }
}
</script>