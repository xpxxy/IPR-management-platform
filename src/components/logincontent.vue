<template>
  <div class="content">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
    <a-form-model-item label="您的手机号" prop="phone" has-feedback>
      <a-input v-model="form.phone" placeholder="请输入您的手机号" >
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="您的密码" prop="password" has-feedback>
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
    name:"logincontent",
    data(){
        return{
            status:false,
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
            form: {
                phone: "",
                password:"",
            
            },
            rules:{
              phone:[{required:true,message:"id不能为空！",trigger:'blur'}],
              password:[{required:true,message:"密码不能为空！",trigger:'blur'}],
            },
            
        }
    },
    methods:{
                ToIndexPage(){
                    this.$router.push({
                        path:"/"
                    })
                },
                ToUser(){
                  this.$router.push({
                        path:"/user",
                  })  
                },
                onSubmit() {
            this.$refs.ruleForm.validate(valid=>{
              // console.log(1)
              if(valid){
                // console.log(1)
                  this.axios.post("http://localhost/userLogin", this.form,{ timeout : 5000 })
                    .then(res =>{
                      console.log(1)
                      if(res.data.code == 200){
                        console.log(res.data);
                        //将登陆返回的用户UID存起来
                        window.localStorage.setItem("token",res.data.data)
                        console.log(res.data.data)
                        this.$message.success("登录成功，即将前往个人中心页面");
                          this.ToUser()
                        // setTimeout(function(){this.ToUser()},3000);
                        
                      }
                    }).catch(reason => {
                      this.$message.error("服务器超时")
                      // console.log(1)
                    })
              } else{
                  this.$message.error('登录失败，请检查您的表单是否完成')
                }
            })
        }
    }

    
}
</script>

<style>

</style>