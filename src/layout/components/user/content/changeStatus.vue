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
          <a-button type="primary" @click="Public(record.uuid,record.owner,'公开')"> 公开</a-button>
          <a-button type="dashed" @click="Authable(record.uuid,record.owner,'可授权')">可授权</a-button>
          <a-button type="danger" @click="Private(record.uuid,record.owner,'私有')">私有</a-button>

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
    // scopedSlots:{customRender:'name'}
  },
  {
    title:'标题',
    dataIndex:'title',
  },
  {
    title:'区块链地址',
    dataIndex:'address',
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
  {
    title:'修改状态',
    dataIndex:'verify',
    align:'center',
    scopedSlots: { customRender: 'verify' },

  },
  

];
export default {
    name:"changeStatus",
    data(){
        return{
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
      Public(uuid,owner,status){
        this.form.uuid=uuid;
        this.form.owner=owner;
        this.form.publicStatus=status;
        this.axios.post("http://localhost/ipPublic",this.form)
        .then(res=>{
          if(res.data.code=200){
            this.$message.success("您的更改已生效")
            this.axios.get("http://localhost/showIPInfo", {
              params: {
                uid: this.token
              },
            })
              .then(res => {
                this.data = res.data.data
              })
          } 
        })
      },
      Authable(uuid,owner,status){
        this.form.uuid=uuid;
        this.form.owner=owner;
        this.form.publicStatus=status;
        this.axios.post("http://localhost/ipPublic",this.form)
        .then(res=>{
          if(res.data.code=200){
            this.$message.success("您的更改已生效")
            this.axios.get("http://localhost/showIPInfo", {
              params: {
                uid: this.token
              },
            })
              .then(res => {
                this.data = res.data.data
              })
          } 
        })
      },
      Private(uuid,owner,status){
        this.form.uuid=uuid;
        this.form.owner=owner;
        this.form.publicStatus=status;
        this.axios.post("http://localhost/ipPublic",this.form)
        .then(res=>{
          if(res.data.code=200){
            this.$message.success("您的更改已生效")
            this.axios.get("http://localhost/showIPInfo", {
              params: {
                uid: this.token
              },
            })
              .then(res => {
                this.data = res.data.data
              })
          } 
        })
      },
      
    },
    mounted(){
      this.token=localStorage.getItem("token")
      this.axios.get("http://localhost/showIPInfo",{
        params:{
          uid:this.token
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