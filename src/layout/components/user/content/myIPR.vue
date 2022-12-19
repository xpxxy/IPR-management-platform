<template>
    <div class="content">
      <a-modal 
        :visible="visible" 
        title="填写转让信息" 
        @ok="handleOk" 
        :confirm-loading="confirmLoading" 
        @cancel="handleCancel" 
        :destroyOnClose=false 
        cancelText="取消" okText="提交"
      >
        <span>您的转让对象</span>
        <a-input v-model="form.transferee"/>
        <span>您的转让理由</span>
        <a-input v-model="form.reason" />
        
        
      </a-modal>
      <a-table :columns="columns" :dataSource="data" bordered 
      
      >
          <template 
             slot-scope="{text,record,index}"      
          >
          
  
          </template>
          <!-- <template #transfer="text,record,index">
            <a-button-group>
            <a-button type="primary" @click="transfer(record.uuid,record.owner)">转让他人</a-button>
            
  
          </a-button-group>
        </template> -->
      </a-table>
  
    </div>
  </template>
  
  <script>
  const columns = [
    {
      title:'产权编号',
      dataIndex:'uuid',
      align:'center',
      width:'10%',
      
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
      width:'10%',
      dataIndex:'address',
    },
  
    {
      title:'申请时间',
      align:'center',
      dataIndex:'applyDatetime',
      width:'15%',
    },
    {
      align:'center',
      title:'生效时间',
      dataIndex:'effectiveDatetime',
      width:'15%',
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
        title:'审核人',
        dataIndex:'adminId',
        align:'center',
    }
    
    // {
      
    //   title:'转让',
    //   dataIndex:'transfer',
    //   align:'center',
    //   scopedSlots: { customRender: 'transfer' },
  
    // },
    
  
  ];
  export default {
      name:"myIPR",
      data(){
          return{
              visible:false,
              confirmLoading:false,
              token:'',
              data:[],
              columns,
              loading:true,
              form:{
                transferor:"",
                transferee:'',
                ip:'',
                reason:'',
              },
              
              
          }
      },
      methods:{
        // empty(){
        //       this.form.transferee="";
        //       this.form.transferor
        //       this.form.ip="";
        //       this.form.reason="";
        // },
    //     onSearch(value) {
    //       console.log(value);
    //       this.axios.get("http://localhost/searchIP",{
    //         params:{
    //           key:value,
    //         }
    //       })
    //       .then(res=>{
    //         if(res.data.code==200){
    //             this.data=res.data.data;
  
    //         }
    //       })
    //     },
    //     transfer(uuid,owner){
    //         this.visible=true;
    //         this.form.ip=uuid;
    //     },
    //     handleOk(e){
    //       this.confirmLoading=true;
    //       this.warning();        
    //     },
    //     warning() {
    //       this.$warning({
    //         title: '再次确认',
    //         content: '你确定要把知识产权转让？',
    //         onOk:()=>{
    //           console.log("d");
    //           this.confirmLoading=false;
    //           this.visible=false;
    //           this.form.transferor=localStorage.getItem("token")
    //           this.axios.post("http://localhost/transferApply",this.form)
    //           .then(res=>{
    //             if(res.data.code==200){
    //               this.$message.success("您已成功将知识产权转让给对方")
    //               this.empty();
    //               this.axios.get("http://localhost/showIPInfo", {
    //                 params: {
    //                   uid: this.token
    //                 }
    //               })
    //                 .then(res => {
    //                   if (res.data.code == 200) {
    //                     this.data = res.data.data
    //                   }
    //                 })
                  
    //             }else if(res.data.code==40001){
    //               this.$message.warn("请勿重复提交");
    //               this.empty();
    //             }
    //             else if(res.data.code==50001){
    //               this.$message.warn("数据库插入失败");
    //               this.empty();
    //             }
    //             else{
    //               this.$message.error("服务器开了给小差");
    //               this.empty();
    //             }
    //           })
    //         }
    //       });
    //     },  
    //     handleCancel(e) {
    //     // console.log('Clicked cancel button');
    //     this.visible = false;
  
    //   },
      },
      mounted(){
        this.token=localStorage.getItem('token');
        this.axios.get("http://localhost/showIPInfo",{
          params:{
            uid:this.token
          }
        })
        .then(res=>{
          if(res.data.code==200){
            this.data=res.data.data
          }
        })
      }
      
  }
  </script>
  
  <style>
  
  </style>