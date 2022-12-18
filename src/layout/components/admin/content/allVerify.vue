<template>
    <div class="content">
    <a-modal 
      :visible="visible" 
      title="查看详情" 
      @ok="handleOk" 
      @cancel="handleCancel" 
      :destroyOnClose=false 
      cancelText="取消" okText="确定"
      :width="800"
    >
    <a-table :columns="columns" :dataSource="detaildata" size="small" :pagination=false />
    </a-modal>
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 7 }" tableLayout="fixed">
        <template 
           slot-scope="{text,record,index}"      
        >
        </template>
        <template #detail="text,record,index">
          <a-button-group>
          <a-button type="primary" @click="detail(record)"> 查看详情</a-button>
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
    width:'30%'

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
    width:'14%'
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
    {
        title: '详情',
        dataIndex: '详情',
        align: 'center',
        scopedSlots: { customRender: 'detail' },

    },

];
const detailcolumns=[
{
    title:'产权编号',
    dataIndex:'uuid',
    align:"center",
    width:'30%'

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
    width:'14%'
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
]
export default {
    name:"allVerify",
    data(){
        return{
            data:[],
            visible:false,
            columns,
            detailcolumns,
            form:{
              aid:"",
              uuid:"",
            },
            detaildata:[]
        }
    },
    methods:{
     detail(r){
        console.log(r)
        this.detaildata.push(r)
        this.visible=true
     },
     handleOk(e){
          this.visible=false;
          setTimeout(()=>{
            this.detaildata=[];
          },400)
      },
      handleCancel(e) {
        this.visible=false;
          setTimeout(()=>{
            this.detaildata=[];
          },1000)
      },
    },
    mounted(){
        this.axios.get("http://localhost/queryAllApplyinfo")
        .then(res=>{
            this.data=res.data.data
        })
    }
}
</script>
  
<style>
  
  </style>