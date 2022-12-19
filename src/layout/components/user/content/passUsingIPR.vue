<template>
    <div class="content">
        <!-- <a-input-search placeholder="输入知识产权的关键词" enter-button @search="onSearch" /> -->
        <a-table :columns="columns" :dataSource="data" bordered>
            <template slot-scope="{text,record,index}">
            </template>
            <template #reply="text, record, index">
                <a-button-group>
                    <a-button type="primary" @click="Allow(record.no, record.licensor)">允许</a-button>
                    <a-button type="danger" @click="notAllow(record.no, record.licensor)">不允许</a-button>
                </a-button-group>
            </template>
        </a-table>

    </div>
</template>
  
<script>
const columns = [
    {
        title: '申请编号',
        dataIndex: 'no',
        align: 'center'
    },
    {
        title: '产权编号',
        dataIndex: 'ip',
        align: 'center',
        // scopedSlots:{customRender:'name'}
    },
    {
        title: '产权名',
        dataIndex: 'title',
        align: 'center',
    },
    {
        title: '申请人',
        dataIndex: 'applicant',
        align: 'center',

    },
    {
        title: '产权拥有人',
        align: 'center',
        dataIndex: 'licensor',
    },

    {
        title: '申请时间',
        align: 'center',
        dataIndex: 'applyTime',
    },
    {
        align: 'center',
        title: '状态',
        dataIndex: 'state'
    },
    {
        align: 'center',
        title: '申请理由',
        dataIndex: 'reason',
    },
    {

        title: '答复',
        dataIndex: 'reply',
        align: 'center',
        scopedSlots: { customRender: 'reply' },
    },


];
export default {
    name: "passUsingIPR",
    data() {
        return {
            token: '',
            data: [],
            columns,
            form: {
                no: "",
                licensor: "",
            },
        }
    },
    methods: {
        Allow(no, licensor) {
            this.form.no = no;
            this.form.licensor = licensor;
            console.log(this.form)
            this.axios.post("http://localhost/permitAgree", this.form)
                .then(res => {
                    if (res.data.code == 200) {
                        this.$message.success("您已许可对方使用您的知识产权")
                        this.display()
                    }
                    else if (res.data.code == 404) {
                        this.$message.warn("授权编号所对应的授权信息不存在")
                    }

                })
                .catch(reason => {
                    this.$message.error("服务器暂时开了个小差")
                })
        },
        notAllow(no, licensor) {
            this.form.no = no;
            this.form.licensor = licensor;
            this.axios.post("http://localhost/permitRefuse", this.form)
                .then(res => {
                    if (res.data.code == 200) {
                        this.$message.success("您已成功拒绝对方的使用申请")
                        this.display()
                    }
                    else if (res.data.code == 404) {
                        this.$message.warn("授权编号代表的授权信息不存在")
                    }
                })
                .catch(reason => {
                    this.$message.error("服务器开了个小差")
                })

        },
        display() {
            this.token = localStorage.getItem('token')
            this.axios.get("http://localhost/showPermitList", {
                params: {
                    uid: this.token,
                }
            })
                .then(res => {
                    if (res.data.code == 200) {
                        this.data = res.data.data
                    }
                })
                .catch(reason => {
                    this.$message.error("服务器开了个小差")
                })
        }
    },
    mounted() {
        this.display()
    }

}
</script>
  
<style>

</style>