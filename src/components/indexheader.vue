<template>
  <div class="top">
    <a-layout>
      <a-layout-header class="header">
        <a-row>
          <a-col :span="1">
            <div class="title"><img class="logo" src="@/assets/mylogo.png" /> &nbsp;<span style="color:#4095e5">知识产权</span>平台</div>
          </a-col>
        <a-col :span="10" :offset="10">
        <a-menu
          theme="light"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '80px' }"
        >
        
          <a-menu-item key="1">
            首页
          </a-menu-item>
          <a-menu-item key="2">
            知识产权登记
          </a-menu-item>
          <a-menu-item key="3">
            知识产权分发
          </a-menu-item>
          <a-menu-item key="4">
            个人中心
          </a-menu-item>
          
        </a-menu>
        </a-col>
        <a-col :span="3" >
          <div class="btn-group">
          <a-button-group>
          <a-button type="primary" icon="login" @click="ToLogin">登录</a-button>
          <a-button type="primary" icon="user-add" @click="ToRegister">注册</a-button>
          </a-button-group>
        </div>
        </a-col>
      </a-row>
      </a-layout-header>
    </a-layout>
    
  </div>
</template>

<script>
export default {
    name:"indexheader",
    methods:{
      ToLogin(){
          this.$router.push({
            path:"/login",
            
          })
      },
      ToRegister(){
          this.$router.push({
            path:"/register",
          })
      }
    },
}
</script>

<style>

.header{
  background-color: white;
}
.title{
  line-height: 80px;
  font-size:25px;
  width: 400px;
}
.logo{
  
  width:80px;
  height: 80px;
  
}
.btn-group{
  line-height: 80px;
}
</style>