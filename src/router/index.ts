import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AppAuth from '@/views/AppAuth.vue'
import AppAuthLogIn from '@/views/AppAuth/AppAuthLogIn.vue'
import AppAuthSignUp from '@/views/AppAuth/AppAuthSignUp.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: AppAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: AppAuthLogIn
  },
  {
    path: '/signup',
    name: 'Signup',
    component: AppAuthSignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
