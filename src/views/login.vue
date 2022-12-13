<template>
  <div>
    <div>
      <titleheaderforlogin />
    </div>
    <div>
      <logincontent />
    </div>
  </div>
</template>

<script>
import titleheaderforlogin from '@/components/titleheaderforlogin.vue';
import logincontent from '@/components/logincontent.vue'
export default {
    name:'login',
    components:{
      titleheaderforlogin,
      logincontent
    }
}
</script>

<style>

</style>