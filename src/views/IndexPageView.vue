<template>
  <div class="main">
    <indexheader />
    <!-- <br/> -->
    <div class="lunbo">
      <a-carousel autoplay>
        <div class="frame">
          <div id="pic1">&nbsp;</div>
        </div>
        <div class="frame">
          <div id="pic2">&nbsp;</div>
        </div>
        <div class="frame">
          <div id="pic3">&nbsp;</div>
        </div>
        <div class="frame">
          <div id="pic4">&nbsp;</div>
        </div>
      </a-carousel>
    </div>
    <br/><br/><br/>
    <a-divider></a-divider>
    <div class="text">

      <h2>我们的优势</h2>
      <div class="textbox">
        <a-row>
        <a-col :span="8">
        <a-card hoverable style="width:" >
          <img slot="cover" alt="example" src="@/assets/b9a712f053a227663f76c9fae05d54a4.jpeg" />
          <a-card-meta title="知识产权管理难？">
            <template slot="description">
              你需要我们！<a-icon type="smile-o" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
        <a-col :span="8">
        <a-card hoverable style="width: ">
          <img slot="cover" alt="example" src="@/assets/5fb903c9244c49a6c49ca650ba997944.jpeg" />
          <a-card-meta title="知识产权转让不透明？">
            <template slot="description">
              你需要我们！<a-icon type="smile-o" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8" >
        <a-card hoverable style="width:" >
          <img slot="cover" alt="example" src="@/assets/ec4b3604b529ab48d5072d0e6f4b6c93.jpeg" />
          <a-card-meta title="知识产权追踪难？">
            <template slot="description">
              你需要我们！<a-icon type="smile-o" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      </a-row>
    </div>
  </div>
  </div>

</template>
  
<script>
import indexheader from '@/components/indexheader.vue';
export default {
  name: 'index',
  components: {
    indexheader
  },
}



</script>
  
<style scoped>
/* For demo */
.ant-carousel>>>.slick-slide {
  text-align: center;
  height: 500px;
  line-height: 500px;
  /* background: #364d79; */
  z-index: 0;
  overflow: hidden;
}

.ant-carousel>>>.slick-slide h3 {
  color: #fff;
}

.text{
  width: 100%;
}
h2{
  font-family: '幼圆';
  font-weight: bold;
  font-size: 50px;
}

.lunbo {
  background: lightgrey;
}

.frame {
  width: 80%;
  height: 300px;
}
.bigtitle{
  display: inline-block;
}

#pic1 {
  background: url("@/assets/0942753f5604b2d9de1a20f03d7c6d40.jpeg") no-repeat center;
  background-size: 100%;
  opacity: 60%;
  z-index: 1;
}

#pic2 {
  background: url("@/assets/5a11a1cc4c03863de8ed08e59e3d71a7.jpeg") no-repeat center;
  background-size: 100%;
  z-index: 1;
}

#pic3 {
  background: url("@/assets/5cab2dceda29f5d502a4233a0d98c700.jpeg") no-repeat center;
  background-size: 100%;
  z-index: 1;
}

#pic4 {
  background: url("@/assets/188a57b1b969a68057ec9a5fe2dcc90e.jpeg") no-repeat center;
  background-size: 50%;

  z-index: 1;
}
</style>