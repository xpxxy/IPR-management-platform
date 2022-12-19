<template>
  <div class="mainbox">
    <titleheader/>
    <div class="registerbox">
      <registercontent/> 
    </div>
     
  </div>
</template>

<script>
import titleheader from "@/components/titleheader.vue"
import registercontent from "@/components/registercontent.vue";
export default {
    name:"register",
    components:{
        titleheader,
        registercontent,
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
.registerbox{
  width: 50%;
  height: 500px;
  margin-left: 25%;
  margin-top: 2%;
  padding-top: 3%;
  border: solid 2px;
  border-color: antiquewhite;
  border-radius: 8px;
  backdrop-filter: blur(20px);
  /* opacity: 25%; */
}
</style>