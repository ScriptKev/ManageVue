import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Login from '@/pages/Login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {  authRequired: false }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {  authRequired: false }
  },

  {
    path: '/clients',
    name: 'Clients',
    // route level code-splitting
    // this generates a separate chunk (clients.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '@/pages/Clients/index'),
    meta: {  authRequired: true }
  },

  {
    path: '/services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (services.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "services" */ '@/pages/Services/index'),
    meta: {  authRequired: true }
  },

  {
    path: '/providers',
    name: 'Providers',
    // route level code-splitting
    // this generates a separate chunk (providers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "providers" */ '@/pages/Providers/index'),
    meta: { authRequired: true }
  },

  {
    path: '/inventory',
    name: 'Inventory',
    // route level code-splitting
    // this generates a separate chunk (inventory.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "inventory" */ '@/pages/Inventory/index'),
    meta: { authRequired: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
