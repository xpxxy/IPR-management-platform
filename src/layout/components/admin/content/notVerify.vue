<template>
    <div class="content">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{pageSize:10}" />
    </div>
  </template>
  
  <script>
  const columns = [
    {
      title:'产权编号',
      dataIndex:'uuid',
      align:"center",
  
      // scopedSlots:{customRender:'name'}
    },
    {
      title:'标题',
      dataIndex:'title',
      align:"center",
  
    },
    {
      title:'申请时间',
      dataIndex:'applyDatetime',
      align:"center",
  
    },
    {
      title:'审核状态',
      dataIndex:'applyStatus',
      align:"center",
  
    },
    {
      title:'公开状态',
      dataIndex:'publicStatus',
      align:"center",
  
    },
    {
      title:'拥有者',
      dataIndex:'owner',
      align:"center",
    },
    
    
  
  ];
  export default {
      name:"notVerify",
      data(){
          return{
              data:[],
              columns,
              loading:true,
              form:{
                aid:"",
                uuid:"",
              }
              
          }
      },
      methods:{
        passs(){
          this.form.aid=localStorage.getItem("token");
          this.form.uuid=this.data[0].uuid;
          console.log(this.form)
          this.axios.post("http://localhost/passApply",this.form)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success("审核成功")
            }
              
          })
        },
        notpass(){
            
          this.form.aid=localStorage.getItem("token");
          this.form.uuid=this.data[0].uuid;
          console.log(this.form)
          this.axios.post("http://localhost/notPassApply",this.form)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success("已打回")
            }
            })
        },
    },
      mounted(){
          this.axios.get("http://localhost/queryNotPassApplyinfo")
          .then(res=>{
              this.data=res.data.data
          })
      }
  }
  </script>
  
  <style>
  
  </style>