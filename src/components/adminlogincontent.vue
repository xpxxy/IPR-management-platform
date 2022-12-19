<template>
    <div class="content">
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
        <a-form-item><div class="logocontrol"><img class="logo" src="@/assets/mylogo.png" /></div></a-form-item>
        <a-form-model-item label="管理员ID" prop="aid" has-feedback>
        <a-input v-model="form.aid" placeholder="请输入您的id" >
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="管理员密码" prop="password" has-feedback>
        <a-input-password v-model="form.password" placeholder="请输入您的密码" prop="password">
          <a-icon slot="prefix" type="safety"  />
        </a-input-password>
      </a-form-model-item>
     
      
      <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
        <a-button type="primary" @click="onSubmit" icon="check-circle">
          登录
        </a-button>
       
      </a-form-model-item>
    </a-form-model>
  
    </div>
  </template>
  
  <script>
  export default {
      name:"adminlogincontent",
      data(){
          return{
              status:false,
              labelCol: { span: 8 },
              wrapperCol: { span: 10 },
              form: {
                  aid: '',
                  password:"",
              
              },
              rules:{
                aid:[{required:true,message:"id不能为空！",trigger:'blur'}],
                password:[{required:true,message:"密码不能为空！",trigger:'blur'}],
              },
              // ToIndexPage,
              
          }
      },
      methods:{
                  ToIndexPage(){
                      this.$router.push({
                          path:"/admin"
                      })
                  },
                  onSubmit() {
              this.$refs.ruleForm.validate(valid=>{
                // console.log(1)
                if(valid){
                  console.log(1)
                    this.axios.post("http://localhost/adminLogin", this.form,{ timeout : 5000 })
                      .then(res =>{
                        if(res.data.code == 200){
                          console.log(res.data);
                          localStorage.setItem("token",this.form.aid)
                          this.$message.success("登录成功");
                          // setTimeout(function(){this.ToIndexPage()},3000);
                          this.$router.push("/admin")
                        }
                        else if(res.data.code==400){
                          this.$message.warn("您的账号或密码有误，请检查后输入")
                        }
                      }).catch(reason => {
                        this.$message.error("服务器超时")
                        // console.log(1)
                      })
                } else{
                    this.$message.error('提交失败，请检查您的表单是否完成')
                  }
              })
          }
      }
  
      
  }
  </script>
  
  <style scoped>
  .logocontrol{
  width: 100%;
  text-align: center;
  margin-left: 76%;
}
.content{
  padding-top:40px;
}
.logo{
  height: 80px;
}
>>> label {
    /* color:#6ae4f2; */
    font-size:larger;
    font-family: '幼圆';
}
  </style>