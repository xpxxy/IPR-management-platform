<template>
  <div class="content">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
    <a-form-model-item label="您的姓名" prop="name" has-feedback>
      <a-input v-model="form.name" placeholder="请输入您的姓名" >
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="您的身份证号" prop="idNumber" has-feedback>
      <a-input v-model="form.idNumber" placeholder="请确认您的身份证号准确无误" prop="idNumber">
        <a-icon slot="prefix" type="contacts"  />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="您的手机号" prop="phone" has-feedback>
      <a-input v-model="form.phone" placeholder="请确认是您本人手机号">
        <a-icon slot="prefix" type="phone"  />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="您的邮箱" prop="email" has-feedback>
      <!-- <a-input v-model="form.email" placeholder="请输入您的邮箱" :data-source="datasource"> -->
        <a-auto-complete :data-source="dataSource" @search="selectemail" v-model="form.email">
          <a-input placeholder="请输入您的邮箱"><a-icon slot="prefix" type="global"  /></a-input>
        </a-auto-complete>
    </a-form-model-item>
    <a-form-model-item label="您的区块链地址" prop="address" has-feedback>
      <a-input v-model="form.address" placeholder="请确认您的区块链地址真实可靠">
        <a-icon slot="prefix" type="block"  />

      </a-input>
    </a-form-model-item>
    <a-form-model-item label="您的登录密码" prop="password" has-feedback>
      <a-input-password v-model="form.password" placeholder="请输入您的密码，这很重要" allow-clear>
        <a-icon slot="prefix" type="lock"  />
      </a-input-password>
    </a-form-model-item>
    
    <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
      <a-button type="primary" @click="onSubmit" icon="check-circle">
        提交
      </a-button>
      <a-button style="margin-left: 10px;" icon="stop">
        取消
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>

<script>
export default {
    data() {
        return {
            status:false,
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
            form: {
                name: '',
                password:"",
                idNumber: "",
                phone: "",
                email: "",
                address: '',
            
                
            },
            dataSource:[],
            rules:{
              name:[{required:true,message:"姓名不能为空！",trigger:'blur'}],
              idNumber:[{required:true,message:"身份证不能为空！",trigger:'blur'},{min:18,max:18,message:"请输入正确的身份证号",trigger:'change'}],
              phone:[{required:true,message:"手机号不能为空！",trigger:'blur'},{len:11,message:"请输入正确的手机号",trigger:'change'}],
              email:[{required:true,message:"邮箱不能为空！",trigger:'blur'}],
              address:[{required:true,message:"区块链地址不能为空！",trigger:'blur'}],
              password:[{required:true,message:"密码不能为空！",trigger:'blur'}],
              
              
            },
        };
    },
    methods: {
      
        ToIndexPage(){
          this.$router.push({
              path:"/"
          })
        },
        ToLogin(){
          this.$router.push("/login")
        },
        onSubmit() {
            this.$refs.ruleForm.validate(valid=>{
              // console.log(1)
              if(valid){
                console.log(1)
                  this.axios.post("http://localhost/userRegister", this.form,{ timeout : 5000 })
                    .then(res =>{
                      console.log(this.form)
                      if(res.data.code == 200){
                        console.log(res.data);
                        this.$message.success("注册成功，即将返回登录页面");
                        this.ToLogin()
                      }
                      else if (res.data.code==40001){
                        this.$message.warn("手机号已被注册")
                      }
                      else if(res.data.code==50002){
                        this.$message.error("	数据库插入失败")
                      
                      }
                      else if(res.data.code==500){
                        this.$message.error("未知错误")
                      }
                    }).catch(reason => {
                      this.$message.error("服务器超时")
                      // console.log(1)
                    })
              } else{
                  this.$message.error('提交失败，请检查您的表单是否完成')
                }
            })
        },
        selectemail(txt){
          this.dataSource=!txt ? [] : [txt+'@qq.com',txt+'@163.com',txt+'@126.com',txt+'@gmail.com',txt+'@outlook.com'];

        },
        
      },

  
  name:"registercontent",
}
</script>

<style scoped>

 >>> label {
    /* color:#6ae4f2; */
    font-size:larger;
    font-family: '幼圆';
}
</style>