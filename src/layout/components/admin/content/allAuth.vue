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
    dataIndex:'applyTime',
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
    title:'被申请人',
    dataIndex:'licensor',
    align:"center",

  },
  {
    title:'申请人',
    dataIndex:'applicant',
    align:"center",
  },
  
  

];
export default {
    name:"allAuth",
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
        this.axios.get("http://localhost/queryAllPermitinfo")
        .then(res=>{
            this.data=res.data.data
        })
    }
}
</script>

<style>

</style>