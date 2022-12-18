<template>
    <div class="content">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize:10}" />
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
    
    
  
  ];
  export default {
      name:"passTransfer",
      data(){
          return{
              data:[],
              columns,
              
              form:{
                aid:"",
                uuid:"",
              }
              
          }
      },
      methods:{
        
    },
      mounted(){
          this.axios.get("http://localhost/queryPassTransferApplyinfo")
          .then(res=>{
              this.data=res.data.data
          })
      }
  }
  </script>
  
  <style>
  
  </style>