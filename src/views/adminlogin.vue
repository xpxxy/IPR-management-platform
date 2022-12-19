<template>
    <div class="mainbox">
      <titleheader />
      <div class="loginbox">
        <adminlogincontent />
      </div>
    </div>
  </template>
  
  <script>
  import titleheader from '@/components/titleheader.vue';
  import adminlogincontent from '@/components/adminlogincontent.vue'
  export default {
      name:'login',
      components:{
        titleheader,
        adminlogincontent
      }
  }
  </script>
  
  <style scoped>
  .mainbox{
    
    background:url("@/assets/photo-1531736275454-adc48d079ce9.jfif") no-repeat;
    /* background-size: 100%,800px; */
    background-size: cover;
    height:750px;
    
}
.loginbox{
  width: 50%;
  height: 400px;
  margin-left: 25%;
  margin-top: 5%;
  border: solid 2px;
  border-color: antiquewhite;
  border-radius: 8px;
  backdrop-filter: blur(20px);
  /* opacity: 25%; */
}
  </style>