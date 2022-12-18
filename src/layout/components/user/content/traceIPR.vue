<template>
  <div class="content">
    <a-input-search placeholder="输入知识产权的关键词" enter-button @search="onSearch" />
    <a-modal 
      :visible="visible" 
      title="查看详情" 
      @ok="handleOk" 
      @cancel="handleCancel" 
      :destroyOnClose=false 
      cancelText="取消" okText="确定"
      width="900"
    >
      <a-table :columns="detailcolumns" :dataSource="detaildata" bordered size="small" tableLayout="fixed" /> 

     
    </a-modal>
    <a-table :columns="columns" :dataSource="data" bordered 
    
    >
        <template 
           slot-scope="{text,record,index}"      
        >
        

        </template>
        <template #trace="text,record,index">
          <a-button-group>
          <a-button type="primary" @click="trace(record.uuid,index)">追踪详情</a-button>
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
    align:'center',
    // scopedSlots:{customRender:'name'}
  },
  {
    title:'标题',
    dataIndex:'title',
    align:'center',

  },
  {
    title:'描述',
    dataIndex:'description',
    align:'center',
  },
  {
    title:'区块链地址',
    align:'center',

    dataIndex:'address',
  },

  {
    title:'申请时间',
    align:'center',
    dataIndex:'applyDatetime',
  },
  {
    align:'center',
    title:'生效时间',
    dataIndex:'effectiveDatetime'
  },
  {
    align:'center',
    title:'审核状态',
    dataIndex:'applyStatus',
  },
  {
    align:'center',
    title:'公开状态',
    dataIndex:'publicStatus',
  },
  {
    title:'所有者',
    dataIndex:'owner',
    align:'center'
  },
  
  {
    
    title:'追踪详情',
    dataIndex:'申请',
    align:'center',
    scopedSlots: { customRender: 'trace' },

  },
  

];
const detailcolumns=[
  {
    title:'产权编号',
    dataIndex:'uuid',
  },
  {
    title:'产权名',
    dataIndex:'title',
  },
  {
    title:'产权地址',
    dataIndex:'address',
  },
  {
    title:'生效状态',
    dataIndex:'effectiveStatus',
  },
  {
    title:'生效时间',
    dataIndex:'effectiveDatetime',
  },
  {
    title:'上级产权（转出的产权编号）',
    dataIndex:'higher',
  },
  {
    title:'下级产权（转入的产权编号）',
    dataIndex:'lower',
  },
  {
    title:'归属者',
    dataIndex:'owner',
  },
  {
    title:'管理员id',
    dataIndex:'adminId',
  },
  {
    title:'根产权（原始产权编号）',
    dataIndex:'rootIp',
  },
]
export default {
    name:"traceIPR",
    data(){
        return{
            visible:false,
            token:'',
            data:[],
            columns,
            detailcolumns,
            loading:true,
            detaildata:[],
            
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

          }
        })
      },
      trace(uuid,index){
        console.log(uuid,index)
          this.axios.get("http://localhost/searchIPTrace",{
            params:{
              uuid:uuid,
            }
          })
          .then(res=>{
            this.visible=true;
            if(res.data.code==200){
              this.detaildata=res.data.data
              console.log(this.detaildata)
              
            }
          })
          this.visible=true;
      },
      handleOk(e){
          this.visible=false;
          Object.keys(this.form).forEach(key=>{this.form[key]=''})
          console.log(this.form)
      },
      handleCancel(e) {
      // console.log('Clicked cancel button');
        this.visible = false;
      },
    },
    
}
</script>

<style>

</style>