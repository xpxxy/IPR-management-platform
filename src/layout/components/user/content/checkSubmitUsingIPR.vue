<template>
  <div class="content">
    <a-table :columns="columns" :dataSource="data" bordered 
    
    >
        <template 
           slot-scope="{text,record,index}"      
        >
        

        </template>
        
    </a-table>

  </div>
</template>

<script>
const columns = [
  {
    title:'申请编号',
    dataIndex:'no',
    align:'center'
  },
  {
    title:'产权编号',
    dataIndex:'ip',
    align:'center',
    // scopedSlots:{customRender:'name'}
  },
  {
    title:'产权名',
    dataIndex:'title',
    align:'center',
  },
  {
    title:'申请人',
    dataIndex:'applicant',
    align:'center',

  },
  {
    title:'产权人',
    align:'center',

    dataIndex:'licensor',
  },

  {
    title:'申请时间',
    align:'center',
    dataIndex:'applyTime',
  },
  {
    align:'center',
    title:'状态',
    dataIndex:'state'
  },
  {
    align:'center',
    title:'申请理由',
    dataIndex:'reason',
  },
  {
    title:'允许时间',
    dataIndex:'permitTime',
    align:'center',
  }
  

];
export default {
    name:"checkSubmitUsingIPR",
    data(){
        return{
            visible:false,
            token:'',
            data:[],
            columns,
            loading:true,
            form:{
              
              uuid:"",
              owner:'',
              publicStatus:''
            },
            
            
        }
    },
    methods:{
      onSearch(value) {
        console.log(value);
        this.axios.get("http://localhost/searchIP",{
          params:{
            key:value,
          }
        })
        .then(res=>{
          if(res.data.code==200){
              this.data=res.data.data;
              this.visible=true;

          }
        })
      },
      handleOk(e) {
      console.log(e);
      this.visible = false;
    },
      
    },
    mounted(){
      this.token=localStorage.getItem("token")
      this.axios.get("http://localhost/showApplyList",{
        params:{
          uid:this.token
        }
      })
      .then(res=>{
        if(res.data.code==200){
          this.data=res.data.data
        }
      })
      .catch(reason=>{
        this.$message.error("服务器开了个小差")
      })
    }
    
}
</script>

<style>

</style>