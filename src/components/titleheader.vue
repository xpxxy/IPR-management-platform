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
        <a-col :span="1">
        <a-menu-item disabled="">
            <div class="title">
                <img class="logo" src="@/assets/mylogo.png" />&nbsp;<span style="color:#4095e5">知识产权</span>平台
            </div>
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