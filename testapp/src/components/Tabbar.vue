<template>
    <footer>
        <ul>
            <!-- vue-router 3.x 声明式导航 router-link是一个组件 -->
            <!-- to跳转到哪个path  active-class自定义选中的条目类，默认是router-link-active tag渲染成的节点，默认a-->
            <!-- <li>
                <router-link to="/films" active-class="bottom-active" tag="a">电影</router-link>
            </li> -->
            <router-link to="/films" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'bottom-active':''">
                    <i class="iconfont icon-dianying"></i>
                    <span>电影</span>
                </li>
            </router-link>
            <!-- vue-router 4.x的写法 v-slot插槽的写法，传一个对象 navigate点击回调  isActive是否选中 -->
            <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'bottom-active':''">
                    <i class="iconfont icon-yingyuan"></i>
                    <span>影院</span>
                </li>
            </router-link>
            <router-link to="/center" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'bottom-active':''">
                    <i class="iconfont icon-wode"></i>
                    <span>我的</span>
                </li>
            </router-link>
        </ul>
    </footer>
</template>
<script>
//导入src/assets/iconfont
import '@/assets/iconfont/iconfont.css'
export default {
    
}
</script>
<style lang="scss" scoped>
    //router-link中的类
    .router-link-active,.bottom-active{
        color: red;
    }
    footer {
        z-index: 100;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.0625rem;
        background: white;
        ul {
            display: flex;
            li {
                flex: 1;
                line-height: 1.5625rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                i {
                    font-size: 20px;
                }
                span {
                    font-size: 16px;
                }
            }
        }
    }
</style>