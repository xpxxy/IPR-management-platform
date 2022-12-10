import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPageView from '../views/IndexPageView.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path:'/',
    component: IndexPageView
  },
  {
    path:'/login',
    name:'login',
    component:()=>import("../views/login.vue"),
  },
  {
    path:'/register',
    name:"register",
    component:()=>import("../views/register.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
