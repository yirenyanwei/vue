import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
import Comingsoon from '../views/films/Comingsoon'
import Nowplaying from '../views/films/Nowplaying'

const routes = [
  {
    path: '/films',
    component: Film,
    name: 'film',//命名路由
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      },
      {
        path: '/detail/:id',
        component: Detail
      }
    ]
  },
  {
    path: '/cinemas',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/',//通配
    redirect: '/films'
  },
  {
    path: '/:aabb',//通配
    redirect: {
      name:'film'
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),//history模式
  history: createWebHashHistory(process.env.BASE_URL),//hash模式
  routes
})

export default router
