<template>
  <div class="content">
    <a-input-search placeholder="输入知识产权的关键词" enter-button @search="onSearch" />
    <a-modal 
      :visible="visible" 
      title="申请" 
      @ok="handleOk" 
      :confirm-loading="confirmLoading" 
      @cancel="handleCancel" 
      :destroyOnClose=false 
      cancelText="取消" okText="提交"
    >
      <span>您的申请理由</span>
      <a-input v-model="form.reason">

      </a-input>
    </a-modal>
    <a-table :columns="columns" :dataSource="data" bordered 
    
    >
        <template 
           slot-scope="{text,record,index}"      
        >
        

        </template>
        <template #using="text,record,index">
          <a-button-group>
          <a-button type="primary" @click="using(record.uuid)">申请使用</a-button>
          

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
    
    title:'申请使用',
    dataIndex:'申请',
    align:'center',
    scopedSlots: { customRender: 'using' },

  },
  

];
export default {
    name:"submitUsingIPR",
    data(){
        return{
            visible:false,
            confirmLoading:false,
            token:'',
            data:[],
            columns,
            loading:true,
            form:{
              applicant:"",
              ip:'',
              reason:''
            },
            
            
        }
    },
    methods:{
      empty(){
            this.form.applicant="";
            this.form.ip="";
            this.form.reason="";
      },
      emptydata(){
        this.data=[];
      },
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
          else if(res.data.code==404){
            this.$message.warn("未找到产权信息")
            this.emptydata()
          }
        })
      },
      using(uuid){
          this.visible=true;
          this.form.ip=uuid;
      },
      handleOk(e){
        this.confirmLoading=true;
        setTimeout(()=>{
          this.visible=false;
          this.confirmLoading=false;
          this.form.applicant=localStorage.getItem("token")
          this.axios.post("http://localhost/applyPermit",this.form)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success("您的使用申请已经成功提交")
              this.empty();
            }else if(res.data.code==40001){
              this.$message.warn("请勿重复提交");
              this.empty();
            }
            else if(res.data.code==40002){
              this.$message.warn("申请人不存在");
              this.empty();
            }
            else{
              this.$message.error("数据库修改失败");
              this.empty();
            }
          })
        },2000)
        
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