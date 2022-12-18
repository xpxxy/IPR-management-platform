<template>
  <div class="content">
    <a-input-search placeholder="输入知识产权的关键词" enter-button @search="onSearch" />
    <a-modal v-model="visible" title="查询结果" @ok="handleOk" destroyOnClose:true width=800 >
      <a-table :columns="columns" :dataSource="data" bordered />
    </a-modal>
  </div>
</template>

<script>
const columns = [
  {
    title:'产权编号',
    dataIndex:'uuid',
    // scopedSlots:{customRender:'name'}
  },
  {
    title:'标题',
    dataIndex:'title',
  },
  {
    title:'描述',
    dataIndex:'description',
  },

  {
    title:'申请时间',
    dataIndex:'applyDatetime',
  },
  {
    title:'生效时间',
    dataIndex:'effectiveDatetime'
  },
  {
    title:'审核状态',
    dataIndex:'applyStatus',
  },
  {
    title:'公开状态',
    dataIndex:'publicStatus',
  },
  {
    title:'拥有者',
    dataIndex:'owner',
  },
]
export default {
    name:"searchIPR",
    data(){
      return{
        visible:false,
        columns,
        data:[],
        form:{
          uuid:"",
          title:"",
          description:'',
          address:"",
          effectiveDatetime:'',
          effectiveStatus:'',
          publicStatus:"",
          higher:'',
          lower:'',
          applyDatetime:'',
          applyStatus:'',
          owner:'',
          adminId:'',
        }

      }
    },
    methods: {
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

}
</script>

<style>

</style>