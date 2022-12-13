import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPageView from '../views/IndexPageView.vue'


Vue.use(VueRouter)


//新建一个路由数组
const routes = [
  
  //根目录
  {
    path:'/',
    component: IndexPageView
  },
  //登录页面路由
  {
    path:'/login',
    name:'login',
    component:()=>import("../views/login.vue"),
  },
  //注册页面路由
  {
    path:'/register',
    name:"register",
    component:()=>import("../views/register.vue")
  },
  //管理员登录路由
  {
    path:"/adminlogin",
    name:'adminlogin',
    component:()=>import("../views/adminlogin.vue")
  },
  //用户界面路由
  {
    path:"/user",
    name:'user',
    component:()=>import("../layout/components/user/user.vue"),
    //设置第一次打开用户中心自动跳转个人页面
    redirect:"/user/myinfo",
    //用户中心的子路由
    children:[
      {
        //我的知识产权
        path:"myinfo",
        name:"myinfo",
        component:()=>import("../layout/components/user/content/myinfo.vue")
      },
      //申请登记
      {
        path:"submitIPR",
        name:"submitIPR",
        component:()=>import("../layout/components/user/content/submitIPR.vue")
      },
      //查询登记进度
      {
        path:"checkSubmitIPR",
        name:"checkSubmitIPR",
        component:()=>import("../layout/components/user/content/checkSubmitIPR.vue"),
      },
      //变更知识产权
      {
        path:"changeStatus",
        name:"changeStatus",
        component:()=>import("../layout/components/user/content/changeStatus.vue"),
      },
      //查询知识产权
      {
        path:"searchIPR",
        name:"searchIPR",
        component:()=>import("../layout/components/user/content/searchIPR.vue"),
      },
      //提交使用申请
      {
        path:"submitUsingIPR",
        name:"submitUsingIPR",
        component:()=>import("../layout/components/user/content/submitUsingIPR.vue"),
      },
      //查询申请进度
      {
        path:"checkSubmitUsingIPR",
        name:"checkSubmitUsingIPR",
        component:()=>import("../layout/components/user/content/checkSubmitUsingIPR.vue"),
      },
      //转让知识产权
      {
        path:"transferIPR",
        name:"transferIPR",
        component:()=>import("../layout/components/user/content/transferIPR.vue"),
      },
      //知识产权受让
      {
        path:"receiveIPR",
        name:"receiveIPR",
        component:()=>import("../layout/components/user/content/receiveIPR.vue"),
      },
      //知产产权追踪
      {
        path:"traceIPR",
        name:"traceIPR",
        component:()=>import("../layout/components/user/content/traceIPR.vue"),
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
