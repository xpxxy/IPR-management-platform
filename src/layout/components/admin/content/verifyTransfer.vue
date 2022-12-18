<template>
    <div class="content">
      <a-table :columns="columns" :dataSource="data" bordered
      
      >
          <template 
             slot-scope="{text,record,index}"      
          >
          
  
          </template>
          <template #verify="text,record,index">
            <a-button-group>
            <a-button type="primary" @click="passs(record.ip)"> 通过</a-button>
            <a-button type="danger" @click="notpass(record.ip)">不通过</a-button>
          </a-button-group>
        </template>
      </a-table>
  
    </div>
  </template>
  
  <script>
  const columns = [
    {
        title:'转让编号',
        dataIndex:'no',
        align:'center',
    },
    {
      title:'产权编号',
      dataIndex:'ip',
      align:"center",
    },
    {
      title:'申请时间',
      dataIndex:'datetime',
      align:"center",
    },
    {
      title:'审核状态',
      dataIndex:'state',
      align:"center",
  
    },
    {
      title:'转让理由',
      dataIndex:'reason',
      align:"center",
  
    },
    {
      title:'转让者',
      dataIndex:'transferor',
      align:"center",
  
    },
    {
      title:'受让者',
      dataIndex:'transferee',
      align:"center",
    },
    {
      title:'审核',
      dataIndex:'verify',
      align:'center',
      scopedSlots: { customRender: 'verify' },
  
    },
    
  
  ];
  export default {
      name:"verifyTransfer",
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
        passs(ip){
          console.log(ip)
          this.form.aid=localStorage.getItem("token");
          this.form.uuid=ip;
          console.log(this.form)
          this.axios.post("http://localhost/passTransfer",this.form)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success("审核成功")
              this.axios.get("http://localhost/queryTransferApplyinfo")
                .then(res=>{
                    this.data=res.data.data
                })
            }
            else if(res.data.code==404){
                this.$message.warn("没有找到转让信息")
            }
            else if(res.data.code==50002){
                this.$message.warn("转让失败")
            }
            else if(res.data.code==50001){
                this.$message.warn("审核信息更新失败")
            }
          })
        },
        notpass(ip){
              this.form.aid=localStorage.getItem("token");
              this.form.uuid=ip;
              console.log(this.form)
              this.axios.post("http://localhost/notPassTransfer",this.form)
              .then(res=>{
                    if(res.data.code==200){
                    this.$message.success("已打回")
                    this.axios.get("http://localhost/queryTransferApplyinfo")
                        .then(res=>{
                            this.data=res.data.data
                        })
                    }
                    else if(res.data.code==404){
                        this.$message.warn("审核信息不存在")
                    }
                    else if(res.data.code==50001){
                        this.$message.warn("审核信息更新失败")
                    }
                })
            },
      },
      mounted(){
          this.axios.get("http://localhost/queryTransferApplyinfo")
          .then(res=>{
              this.data=res.data.data
          })
      }
  }
  </script>
  
  <style>
  
  </style>