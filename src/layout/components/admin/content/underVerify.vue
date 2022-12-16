<template>
  <div class="content">
    <a-table :columns="columns" :dataSource="data" bordered :row-selection="rowSelection" :expanded-row-keys.sync="expandedRowKeys"
    
    >
        <template 
           slot-scope="{text,record,index}"      
        >
        

        </template>
        <template #verify="text,record,index">
          <a-button-group>
          <a-button type="primary" @click="passs(record.uuid)"> 通过</a-button>
          <a-button type="danger" @click="notpass(record.uuid)">不通过</a-button>
        </a-button-group>
      </template>
    </a-table>

  </div>
</template>

<script>
const columns = [
  {
    title:'产权编号',
    dataIndex:'uuid',
    align:"center",

    scopedSlots:{customRender:'uuid'}
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
    // scopedSlots:{customRender:'applyDatetime'}

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
    title:'申请时间',
    dataIndex:'applyDatetime',
    align:"center",

  },
  {
    title:'拥有者',
    dataIndex:'owner',
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
    name:"underVerify",
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
      passs(uuid){
        console.log(uuid)
        this.form.aid=localStorage.getItem("token");
        this.form.uuid=uuid;
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
        this.axios.get("http://localhost/queryApplyinfo")
        .then(res=>{
            this.data=res.data.data
        })
    }
}
</script>

<style>

</style>