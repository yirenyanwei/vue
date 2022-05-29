import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Cinemas from '@/views/Cinemas'//.vue可以省略
import Search from '@/views/Search'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
// import Order from '@/views/Order'
import Login from '@/views/Login'

Vue.use(VueRouter) //注册路由插件 router-view router-link

//路由配置表
const routes = [
  {
    path: '/films',//路径
    component: Films,//对应的组件
    //嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying,
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      //重定向 film默认显示film/nowplaying
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'filmDetail',//命名路由
    path: '/detail/:myid', //动态二级路由 必须复合/detail/id的二级路由形式
    component: Detail
  },
  {
    path: '/cinemas',//路径
    component: Cinemas,//对应的组件
  },
  {//跟cinemas兄弟关系
    path: '/cinemas/search',
    component: Search,
  },
  {
    path: '/center',//路径
    component: Center,//对应的组件
    meta: {
      isRequired: true,
    },
    beforeEnter: (to, from, next) => {
      console.log('router center', 'beforeEnter')
      next()
    }
  },
  {
    path: '/order',//测试守卫路由
    component: ()=>import('@/views/Order'),//懒加载方式
    //路由元信息
    meta: {
      isRequired: true,
    }
  },
  {
    path: '/login',//登录界面
    component: Login,
  },
  {
    path: '*', //通配符，没匹配到的情况，优先级最低
    redirect: '/films',//重定向
  }
]

const router = new VueRouter({
  mode: 'hash',//路由模式 history 模式  hash 哈希模式
  // base: process.env.BASE_URL,
  routes
})

//路由守卫（拦截）
//全局前置守卫
router.beforeEach((to, from, next)=>{
  console.log('beforeEach', to.fullPath)
  if(to.meta.isRequired) {
    //判断登录，暂时用本地字段判断
    if(localStorage.getItem('token')){
      next()
    }else {
      // next('/login')
      next({
        path:'/login',
        query: {redirect:to.fullPath}//记录要跳哪个界面
      })
    }
    return
  }
  next()
})

export default router
