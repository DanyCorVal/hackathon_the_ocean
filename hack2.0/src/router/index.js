import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/log_in',
    name: 'Log_in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Log_in.vue')
  },
  /*{
    path: '/',
    name: 'dashboardadmin',
    component: DashboardAdmin
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardUser
  },
  {
    path: '/',
    name: 'sign_in',
    component: sig_in
  },*/
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
