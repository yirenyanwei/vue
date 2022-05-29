<template>
    <div>
        <!-- <div class="box">test adapt</div> -->
        <ul>
            <!-- vue-router 3.x 声明式导航 router-link是一个组件 -->
            <!-- to跳转到哪个path  active-class自定义选中的条目类，默认是router-link-active tag渲染成的节点，默认a-->
            <li>
                <router-link to="/films" active-class="bottom-active" tag="a">电影</router-link>
            </li>
            <!-- vue-router 4.x的写法 v-slot插槽的写法，传一个对象 navigate点击回调  isActive是否选中 -->
            <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'bottom-active':''">影院</li>
            </router-link>
            <router-link to="/center" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'bottom-active':''">中心</li>
            </router-link>
        </ul>
        <!-- 路由容器 slot的封装，如果路径匹配，组件就显示到这里-->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    //router-link中的类
    .router-link-active,.bottom-active{
        color: red;
    }
    .box {
        width: 46.875rem;
        height: 18.75rem;
        background: yellow;
    }
</style>
