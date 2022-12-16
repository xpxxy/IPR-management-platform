<template>
  <div class="content">
    <!-- <a-button type="primary">fff</a-button> -->
    <!-- <a-input v-model="id" aria-placeholder="insert"></a-input>> -->
    <a-table :columns="columns" :dataSource="data" bordered></a-table>
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
    title:'申请时间',
    dataIndex:'applyDatetime',
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
    title:'申请时间',
    dataIndex:'applyDatetime',
  },
  {
    title:'拥有者',
    dataIndex:'owner',
  },
  

];
export default {
    name:"checkSubmitIPR",
    data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
    
  },
  mounted(){
      let token=localStorage.getItem("token")
      this.axios.get("http://localhost/showIPProgress",{
        params:{
          uid:token
        },
      })
      .then(res=>{
          this.data=res.data.data
      })
    }

}
</script>

<style>

</style>