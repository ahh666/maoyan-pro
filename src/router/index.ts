import Vue from 'vue'
import store from '@/store'
import VueRouter, { Route } from 'vue-router'
Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/cinema/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue')
  },
  {
    path: '/movie-detail',
    name: 'movieDetail',
    component: () => import('../views/movie-detail/index.vue')
  },
  {
    path: '/position',
    name: 'position',
    component: () => import('../views/position/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/user/Register.vue')
  },
  {
    path: '/search',
    component: () => import('../views/serach/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to: Route, from: Route, next: any): void => {
  if (to.name && /^(home|mine|cinema)$/g.test(to.name)) {
    store.commit('homeModule/setShowTabBar', true)
    next()
  } else {
    store.commit('homeModule/setShowTabBar', false)
    next()
  }
})
export default router
