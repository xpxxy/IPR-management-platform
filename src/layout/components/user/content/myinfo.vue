<template>
  <div class="content">
    <a-descriptions title="我的个人信息" layout="vertical" bordered>
    <a-descriptions-item label="姓名" v-model="form.name">
      {{form.name}}
    </a-descriptions-item>
    <a-descriptions-item label="用户ID" v-model="form.uid">
      {{form.uid}}
    </a-descriptions-item>
    <a-descriptions-item label="身份证号" v-model="form.idNumber">
      {{form.idNumber}}
    </a-descriptions-item>
    <a-descriptions-item label="手机号" v-model="form.phone">
      {{form.phone}}
    </a-descriptions-item>
    <a-descriptions-item label="邮箱" :span="2" v-model="form.email">
      {{form.email}}
    </a-descriptions-item>
  </a-descriptions>
  </div>
</template>

<script>
export default {
    name:"myinfo",
    data(){
      return{
        form:{
          uid: 2,
          name: "小王",
          password: "123",
          idNumber: "789",
          phone: "111",
          email: "111",
          address: "0x7027c013e9fdcccd9c4b5cd53b8e5313368105e1",
          state: null // 用户状态,不需要输出
        },

      }
    },
    mounted(){
      let token=localStorage.getItem("token")
      this.axios.get("http://localhost/viewUserInfo",{
        params:{
          uid:this.form.uid
        },
      })
    }
}
</script>

<style>

</style>