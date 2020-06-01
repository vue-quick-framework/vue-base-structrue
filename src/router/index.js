import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/home.vue') },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../pages/about.vue')
  }
]

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
}
