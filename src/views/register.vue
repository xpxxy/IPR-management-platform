<template>
  <div>
    <div>
        <titleheader/>
    </div>
    <div>
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

<style>

</style>