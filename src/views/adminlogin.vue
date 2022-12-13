<template>
    <div>
      <div>
        <titleheader />
      </div>
      <div>
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
  
  <style>
  
  </style>