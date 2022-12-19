<template>
    <div class="content">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 9 }" tableLayout="fixed">
          <!-- <template slot="verify">
            <a-button-group>
            <a-button type="primary" @click="passs"> 通过</a-button>
            <a-button type="danger" @click="notpass">不通过</a-button>
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
      width:'14%',
      sorter: (a, b) => {
            let aTimeString = a.applyDatetime;
            let bTimeString = b.applyDatetime;
            aTimeString = aTimeString.replace(/-/g, "/");
            bTimeString = bTimeString.replace(/-/g, "/");
            let aTime = new Date(aTimeString).getTime();
            let bTime = new Date(bTimeString).getTime();
            return bTime - aTime;
          },
      defaultSortOrder: 'ascend',
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
    // {
    //   title:'审核',
    //   dataIndex:'verify',
    //   align:'center',
    //   scopedSlots: { customRender: 'verify' },
  
    // },
    
  
  ];
  export default {
      name:"passVerify",
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
        passs(){
          this.form.aid=localStorage.getItem("token");
          this.form.uuid=this.data[0].uuid;
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
          this.axios.get("http://localhost/queryPassApplyinfo")
          .then(res=>{
              this.data=res.data.data
          })
      }
  }
  </script>
  
  <style>
  
  </style>