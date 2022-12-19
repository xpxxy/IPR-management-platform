import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/IndexPageView.vue'


Vue.use(VueRouter)


//新建一个路由数组
const routes = [
  
  //根目录
  {
    path:'/',
    component: index,
    children:[
      

      
    ]
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
  {
        
          path:"/user",
          name:'user',
          meta:{needLogin:true},
          component:()=>import("../layout/components/user/user.vue"),
          //设置第一次打开用户中心自动跳转个人页面
          redirect:"/user/sub1/myinfo",
          //用户中心的子路由
          children:[
            {
              //我的知识产权
              path:"sub1/myinfo",
              name:"myinfo",
              component:()=>import("../layout/components/user/content/myinfo.vue")
            },
            {
              path:"sub1/changeinfo",
              name:"changeinfo",
              component:()=>import("../layout/components/user/content/changeinfo.vue")
            },
            {
              path:"sub1/myIPR",
              name:"myIPR",
              component:()=>import("../layout/components/user/content/myIPR.vue")
            },
            //申请登记
            {
              path:"sub2/submitIPR",
              name:"submitIPR",
              component:()=>import("../layout/components/user/content/submitIPR.vue")
            },
            //查询登记进度
            {
              path:"sub2/checkSubmitIPR",
              name:"checkSubmitIPR",
              component:()=>import("../layout/components/user/content/checkSubmitIPR.vue"),
            },
            //变更知识产权
            {
              path:"sub3/changeStatus",
              name:"changeStatus",
              component:()=>import("../layout/components/user/content/changeStatus.vue"),
            },
            //查询知识产权
            {
              path:"sub3/searchIPR",
              name:"searchIPR",
              component:()=>import("../layout/components/user/content/searchIPR.vue"),
            },
            //提交使用申请
            {
              path:"sub3/submitUsingIPR",
              name:"submitUsingIPR",
              component:()=>import("../layout/components/user/content/submitUsingIPR.vue"),
            },
            {
              path:"sub3/passUsingIPR",
              name:"passUsingIPR",
              component:()=>import("../layout/components/user/content/passUsingIPR.vue")
            },
            //查询申请进度
            {
              path:"sub3/checkSubmitUsingIPR",
              name:"checkSubmitUsingIPR",
              component:()=>import("../layout/components/user/content/checkSubmitUsingIPR.vue"),
            },
            //转让知识产权
            {
              path:"sub4/transferIPR",
              name:"transferIPR",
              component:()=>import("../layout/components/user/content/transferIPR.vue"),
            },
            
            //知产产权追踪
            {
              path:"sub5/traceIPR",
              name:"traceIPR",
              component:()=>import("../layout/components/user/content/traceIPR.vue"),
            },
      
          ]
        },
        {
          path:'/admin',
          name:'admin',
          meta:{needLogin:true},
          redirect:"/admin/sub1/underVerify",
          component:()=>import("../layout/components/admin/admin.vue"),
          children:[
            {
              path:"sub1/underVerify",
              name:"underVerify",
              component:()=>import("../layout/components/admin/content/underVerify.vue"),
            },
            {
              path:"sub1/passVerify",
              name:"passVerify",
              component:()=>import("../layout/components/admin/content/passVerify.vue")
            },
            {
              path:"sub1/notVerify",
              name:"notVerify",
              component:()=>import("../layout/components/admin/content/notVerify.vue")
            },
            {
              path:"sub1/allVerify",
              name:"allVerify",
              component:()=>import("../layout/components/admin/content/allVerify.vue")
            },
            {
              path:"sub2/verifyTransfer",
              name:"verifyTransfer",
              component:()=>import("../layout/components/admin/content/verifyTransfer.vue")
            },
            {
              path:"sub2/notTransfer",
              name:"notTransfer",
              component:()=>import("../layout/components/admin/content/notTransfer.vue")
            },
            {
              path:"sub2/passTransfer",
              name:"passTransfer",
              component:()=>import("../layout/components/admin/content/passTransfer.vue")
            },
            {
              path:"sub2/allTransfer",
              name:"allTransfer",
              component:()=>import("../layout/components/admin/content/allTransfer.vue")
            },
            {
              path:"sub2/allAuth",
              name:"allAuth",
              component:()=>import("../layout/components/admin/content/allAuth.vue")
            },

          ],
        }
  //用户界面路由
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
router.beforeEach((to, from, next) => {
  
  let token = localStorage.getItem("token");
  //测试数据
  // let token =1
  if(to.matched.some(item=>item.meta.needLogin)){
    
    if(token){
      next();
      return;
    }
    alert("没有登录");
    if(!token && to.name === 'login'){
      
      next();
    }
    if(!token&&to.name !=='login'){
      next({name:'login'})
    }
  }else{
    next();
  }
})



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
 
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
export default router
