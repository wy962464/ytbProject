<!-- 人员管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '员工编码',
            style: {
                width: '124px',
            },
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '人员类别',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '司机',
                    value: '0',
                },
                {
                    label: '售票员',
                    value: '1',
                },
                {
                    label: '安保人员',
                    value: '2',
                },
                {
                    label: '技术人员',
                    value: '3',
                },
            ],
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '所在单位',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                name: '余海泉',
                sex: '男',
                berthType: '驾驶员',
                comp: '巴士集团第五分公司',
                iphone: '13823252078',
                beizhu: '',
            },
            {
                name: '余海泉',
                sex: '男',
                berthType: '驾驶员',
                comp: '巴士集团第五分公司',
                iphone: '13823252078',
                beizhu: '',
            },
            {
                name: '余海泉',
                sex: '男',
                berthType: '驾驶员',
                comp: '巴士集团第五分公司',
                iphone: '13823252078',
                beizhu: '',
            },
            {
                name: '余海泉',
                sex: '男',
                berthType: '驾驶员',
                comp: '巴士集团第五分公司',
                iphone: '13823252078',
                beizhu: '',
            },
            {
                name: '余海泉',
                sex: '男',
                berthType: '驾驶员',
                comp: '巴士集团第五分公司',
                iphone: '13823252078',
                beizhu: '',
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '姓名',
            },
            {
                prop: 'sex',
                label: '性别',
            },
            {
                prop: 'berthType',
                label: '职位',
            },
            {
                prop: 'comp',
                label: '单位',
            },
            {
                prop: 'iphone',
                label: '联系电话',
            },
            {
                prop: 'beizhu',
                label: '备注',
            },
        ],
        isSerialNumber: true,
        operatesBtnObj: {
            width: 100,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    dialogStore.$patch({
                                        detailsDialogInfor: {
                                            title: '修改员工信息',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 700,
                                            height: 500,
                                            obj: row,
                                            path: '/setUp/personnelManager/addPersonnelManager',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
                    hasPermi: ['update'],
                },
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    ElMessageBox.confirm('确定删除该条数据？', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning',
                                    })
                                        .then(() => {})
                                        .catch(() => {});
                                }}
                            >
                                删除
                            </el-link>
                        );
                    },
                    hasPermi: ['del'],
                },
            ],
        },
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增员工信息',
            isShow: true,
            width: 700,
            height: 500,
            path: '/setUp/personnelManager/addPersonnelManager',
        },
    });
};
</script>

<template>
    <div class="personnelManager">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.personnelManager {
    width: 100%;
    height: 100%;
}
</style>
