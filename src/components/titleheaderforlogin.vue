<template>
    <div class="top">
      <a-layout>
        <a-layout-header class="header">
          <a-menu
              theme="light"
              mode="horizontal"
              :style="{ lineHeight: '80px' }"
          >
          <a-row>
          <a-col :span="8">
            <a-menu-item disabled="">
                <div class="title">
                    <img class="logo" src="@/assets/mylogo.png" />&nbsp;<span style="color:#4095e5">知识产权</span>平台
                </div>
            </a-menu-item>
          </a-col>
          <a-col :span="8" offset="8">
            <a-menu-item>
                <a-button-group>
                    <a-button type="primary" @click="ToIndexPage">返回首页</a-button>
                    <a-button type="primary" @click="ToAdmin">管理员登录</a-button>
                </a-button-group>
            </a-menu-item>
          </a-col>
          </a-row>
          </a-menu>
        </a-layout-header>
      </a-layout>
    </div>
  </template>
  
  <script>
  export default {
      name:"titleheader",
      methods:{
        ToIndexPage(){
          this.$router.push({
              path:"/"
          })
        },
        ToAdmin(){
            this.$router.push({
                path:"/adminlogin"
            })
        }
  
      }
  }
  </script>
  
  <style>
  .top{
     height:80px;
  }
  .logo{
      width: 80px;
  }
  .title{
    line-height: 80px;
    font-size:25px;
    width: 400px;
  }
  </style>