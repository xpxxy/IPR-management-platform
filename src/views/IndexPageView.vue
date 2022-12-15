<template>
    <div class="main">
        <indexheader/>
        <!-- <login/> -->
    </div>
    
  </template>
  
  <script>
  import indexheader from '@/components/indexheader.vue';
  import login from "../views/login.vue";
  export default {
    name:'index',
    components: {
      indexheader
    },
    // name:'login',
    // components:{login},
  }
    
      
  
  </script>
  
  <style>
  
  </style>