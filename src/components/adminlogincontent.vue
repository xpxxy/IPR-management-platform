<template>
    <div class="content">
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
      <a-form-model-item label="管理员id" prop="login_id" has-feedback>
        <a-input v-model="form.login_id" placeholder="请输入您的id" >
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="管理员密码" prop="login_pw" has-feedback>
        <a-input-password v-model="form.login_pw" placeholder="请输入您的密码" prop="login_pw">
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
                  login_id: '',
                  login_pw:"",
              
              },
              rules:{
                login_id:[{required:true,message:"id不能为空！",trigger:'blur'}],
                login_pw:[{required:true,message:"密码不能为空！",trigger:'blur'}],
              },
              
          }
      },
      methods:{
                  ToIndexPage(){
                      this.$router.push({
                          path:"/"
                      })
                  },
                  onSubmit() {
              this.$refs.ruleForm.validate(valid=>{
                // console.log(1)
                if(valid){
                  console.log(1)
                    this.axios.post("接口地址", this.form,{ timeout : 5000 })
                      .then(res =>{
                        if(res.data.code == 200){
                          console.log(res.data);
                          // localStorage.setItem("token","")
                          this.$message.success("登录成功");
                          setTimeout(function(){this.ToIndexPage()},3000);
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
  
  <style>
  
  </style>