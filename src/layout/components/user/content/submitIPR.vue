<template>
  <div class="content">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
    <a-form-model-item label="IP标题"  prop="title" has-feedback>
      <a-input v-model="form.title" placeholder="请给自己的知识产权起个标题吧"/>
    </a-form-model-item>
    <a-form-model-item label="IP描述" prop="description" has-feedback>
      <a-input v-model="form.description" type="textarea" placeholder="请为自己的知识产权写些简介"/>
    </a-form-model-item>
    <a-form-model-item label="IP公开状态" prop="publicStatus" has-feedback>
      <a-select v-model="form.publicStatus" placeholder="选择一个状态">
        <a-select-option value="公开">
          公开
        </a-select-option>
        <a-select-option value="可授权">
          可授权
        </a-select-option>
        <a-select-option value="私有">
          私有
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="IP拥有者" prop="owner" has-feedback>
      <a-input v-model="form.owner" placeholder="作者是谁"/>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;">
        Cancel
      </a-button>
    </a-form-model-item>
  </a-form-model>
    
  </div>
</template>

<script>
export default {
    name:"submitIPR",
    data() {
    return {
      status:false,
      labelCol: { span: 7 },
      wrapperCol: { span: 10 },
      form: {
        title: '',
        description: "",
        publicStatus: "",
        owner:"",
        
      },
      
      rules:{
        title:[{required:true,message:"名字不可以为空哦",trigger:"blur"}],
        description:[{required:true,message:"描述不能不写哦",trigger:"blur"}],
        publicStatus:[{required:true,message:"阁下还没选择出版的状态哦",trigger:"blur"}],
        owner:[{required:true,message:"谁是它的主人呢",trigger:"blur"}],
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid=>{
        if(valid){
          this.axios.post("http://localhost/ipApply",this.form,{timeout:5000})
            .then(res=>{
              if(res.data.code ==200 ){
                console.log(res.data)
                this.$message.success("您的知识产权申请已经成功提交，请静待审核！");
              }
              else if(res.data.code==400){
                console.log(res.data)
                this.$message.warn("您的知识产权已经被提交过了，请勿重复提交");
              }
              else if(res.data.code==404){
                console.log(res.data)
                this.$messasge.warn("申请人不存在");
              }
              else if(res.data.code==500){
                console.log(res.data)
                this.$message.error("数据库修改失败")
              }
              else{
                this.$message.error("系统开小差了，可能有些错误")
              }
            })
            .catch(reason=>{
              this.$message.error("无法连接到服务器")
            })
        }else{
          this.$message.error("您有表单未完成")
      }
        console.log('submit!', this.form);
      
      })
    }
  },
}
</script>

<style>

</style>