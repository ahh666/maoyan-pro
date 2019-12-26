import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  routes
})

export default router
