<template>
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header class="header">
        <a-menu
          theme="light"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '84px' }"
        >
        <a-col :span="8">
        <a-menu-item disabled="">
          <div class="title">
                  <img class="logo" src="@/assets/mylogo.png" />&nbsp;<span style="color:#4095e5">知识产权</span>平台
          </div>
        </a-menu-item>
    </a-col>
    <a-col :span="8" offset="1"></a-col>
        <a-menu-item disabled="">
            <a-button-group>
                <a-button type="primary" icon="rollback" @click="$router.push({path:'/'})">返回首页</a-button>
                <a-button type="primary" icon="logout" @click="logout">退出登录</a-button>
                
            </a-button-group>
        </a-menu-item>
        
    </a-menu>
        
</a-layout-header>
      <a-layout-content style="padding: 0 0px">
        <a-layout style="padding: 24px 0; background: #fff">
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                mode="inline"
                :default-selected-keys="[subitem]"
                :default-open-keys="[sub]"
                style="height: 100%"
                @click="handleClick"
                >
                <a-sub-menu key="sub1">
                  <span slot="title"><a-icon type="user" />个人中心</span>
                  <a-menu-item key="/user/sub1/myinfo">
                    我的信息
                  </a-menu-item>
                  <a-menu-item key="/user/sub1/changeinfo">
                    修改个人信息
                  </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="form" />知识产权登记</span>
                    <a-menu-item key="/user/sub2/submitIPR" >
                  申请登记
                </a-menu-item>
                <a-menu-item key="/user/sub2/checkSubmitIPR">
                  查询登记进度
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="control" />知识产权使用</span>
                <a-menu-item key="/user/sub3/changeStatus">
                  变更知识产权状态
                </a-menu-item>
                <a-menu-item key="/user/sub3/searchIPR">
                  查询知识产权
                </a-menu-item>
                <a-menu-item key="/user/sub3/submitUsingIPR">
                    提交使用申请
                </a-menu-item>
                <a-menu-item key="/user/sub3/passUsingIPR">
                    确认使用申请
                </a-menu-item>
                <a-menu-item key="/user/sub3/checkSubmitUsingIPR">
                    查询申请进度
                </a-menu-item>
                
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="swap" />知识产权转让</span>
                <a-menu-item key="/user/sub4/transferIPR">
                    转让知识产权
                </a-menu-item>
                
              </a-sub-menu>
              <a-sub-menu key="sub5">
                <span slot="title"><a-icon type="compass" />知识产权追踪</span>
                <a-menu-item key="/user/sub5/traceIPR">
                  知产产权追踪
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '1000px' }">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
         ©2022 Created by Gabriel
      </a-layout-footer>
    </a-layout>
  </template>
<script>


// import titleheader from '@/components/titleheader.vue';
export default{
    name:"user",
    data(){
      return{
        subitem:'/user/myinfo',
        sub:"sub1",
      }
    },
    watch:{
      $route(){
        this.setCurrentRoute()
      }
    },
    methods:{
      //设定点击跳转路由
      logout(){
        localStorage.removeItem("token")
        this.$message.success("退出成功，返回登录界面")
        this.$router.push("/login")
      },
      handleClick(e) {
        //如果key为路由则跳转
        this.current = e.key;
        this.subitem=e.key;
        this.sub=e.keyPath[1];
        if (e.key.indexOf("/") > -1) {
          this.$router.push(e.key).catch(() => { });
        }
      },
      
      setCurrentRoute(){
        this.subitem = this.$route.path;
        this.sub=this.subitem.split("/")[2]
        console.log(this.sub)
        // console.log(this.subitem);
      }
    },
    created(){
      this.setCurrentRoute()
    }
  
    
}


</script>
<style>
  .logo {
    width: 80px;
    height: 80px;
    /* background: rgba(255, 255, 255, 0.2); */
    
    /* margin: 16px 28px 26px 0; */
    /* padding-left: 100px; */
    float: left;
  }
  .header{
    padding-left: 5%;
    padding-top:1%;
    width:100%;
    height:100px;
    line-height: 80px;
  }
  .title{
    text-align: left;
  }
  </style>
  