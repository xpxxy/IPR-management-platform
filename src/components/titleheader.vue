<template>
  <div class="top">
    <a-layout>
      <a-layout-header class="header">
       <a-row>
        <a-menu
            theme="light"
            mode="horizontal"
            :style="{ lineHeight: '80px' }"
        >
        
        <a-col :span="8">
          <div class="title">
              <img class="logo" src="@/assets/mylogo.png" />&nbsp;<span style="color:#4095e5">芝士产权</span>平台
          </div>
        </a-col>
        <a-col :span="8" :offset="8">
          <a-menu-item>
            <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
          </a-menu-item>
        </a-col>
        </a-menu>
      </a-row>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
    name:"titleheader",
}
</script>

<style scoped>

.top{
   height:80px;
}
.header{
  padding: 0px;
  height: auto;
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