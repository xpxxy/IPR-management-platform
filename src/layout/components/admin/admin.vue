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
    <a-col :span="8" offset="6"></a-col>
        <a-menu-item disabled="">
            <a-button-group>
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
                  <span slot="title"><a-icon type="user" />登记审核中心</span>
                  <a-menu-item key="/admin/sub1/underVerify">
                    当前待审核产权
                  </a-menu-item>
                  <a-menu-item key="/admin/sub1/passVerify">
                    通过审核信息
                  </a-menu-item>
                  <a-menu-item key="/admin/sub1/notVerify">
                    未通过审核信息
                  </a-menu-item>
                  <a-menu-item key="/admin/sub1/allVerify">
                    所有审核信息
                  </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="form" />授权中心</span>
                    <a-menu-item key="/admin/sub2/verifyTransfer" >
                        待审核转让
                    </a-menu-item>
                    <a-menu-item key="/admin/sub2/notTransfer">
                        未通过转让
                    </a-menu-item>
                    <a-menu-item key="/admin/sub2/passTransfer">
                        通过转让信息
                    </a-menu-item>
                    <a-menu-item key="/admin/sub2/allTransfer">
                        所有转让信息
                    </a-menu-item>
                    <a-menu-item key="/admin/sub2/allAuth">
                        所有授权记录
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
    name:"admin",
    data(){
      return{
        subitem:'/admin/sub1/underVerify',
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
  