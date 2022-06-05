<template>
    <div>
        <!-- <div class="box">test adapt</div> -->
        <!-- 路由容器 slot的封装，如果路径匹配，组件就显示到这里-->
        <section>
            <router-view></router-view>
        </section>
        <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    </div>
</template>
<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import tabbar from "@/components/Tabbar"

Vue.use(Vant);//引入vant组件库
export default {
    data() {
        return {

        }
    },
    components: {
        tabbar
    }
}
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    ul,li {
        list-style: none;
    }
    .box {
        width: 46.875rem;
        height: 18.75rem;
        background: yellow;
    }
    section {
        margin-bottom: 3.0625rem;
    }
</style>
