<!-- 司机管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '姓名',
            style: {
                width: '124px',
            },
        },
        {
            type: 'treeSelect',
            label: '',
            prop: 'type',
            placeholder: '所属单位',
            style: {
                width: '200px',
            },
            treeSelectList: [
                {
                    value: 1,
                    label: '配电系统',
                    children: [
                        {
                            value: 2,
                            label: '低压柜',
                        },
                        {
                            value: 3,
                            label: '变压器',
                        },
                        {
                            value: 4,
                            label: '高压柜',
                        },
                        {
                            value: 5,
                            label: '补偿柜',
                        },
                    ],
                },
                {
                    value: 6,
                    label: '二供水系统',
                    children: [
                        {
                            value: 7,
                            label: '给水泵',
                        },
                    ],
                },
                {
                    value: 8,
                    label: '供排水系统',
                    children: [
                        {
                            value: 9,
                            label: '潜水泵',
                        },
                    ],
                },
                {
                    value: 10,
                    label: '供排水系统',
                    children: [
                        {
                            value: 11,
                            label: '整体网络架构系统',
                        },
                        {
                            value: 12,
                            label: '管理服务器及主机',
                        },
                        {
                            value: 13,
                            label: '车辆识别监控',
                        },
                        {
                            value: 14,
                            label: '道闸系统',
                        },
                    ],
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                name: '余海泉',
                sex: '男',
                berthType: '巴士集团第五分公司',
                comp: '港湾车队',
                iphone: '204',
                dianhua: '13823252078	',
                beizhu: '',
            },
            {
                name: '罗加宏',
                sex: '男',
                berthType: '巴士集团第五分公司',
                comp: '港湾车队',
                iphone: '204',
                dianhua: '13410353973',
                beizhu: '',
            },
            {
                name: '朱炼华',
                sex: '女',
                berthType: '巴士集团第五分公司',
                comp: '妈湾车队',
                iphone: '81',
                dianhua: '13979598200',
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
                label: '所属单位',
            },
            {
                prop: 'comp',
                label: '所属车队',
            },
            {
                prop: 'iphone',
                label: '所属线路',
            },
            {
                prop: 'dianhua',
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
                                            title: '修改司机',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 700,
                                            height: 450,
                                            obj: row,
                                            path: '/setUp/record/driverManage/addDriverManage',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
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
            title: '新增司机',
            isShow: true,
            width: 700,
            height: 450,
            path: '/setUp/record/driverManage/addDriverManage',
        },
    });
};
</script>

<template>
    <div class="driverManage">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.driverManage {
    width: 100%;
    height: 100%;
}
</style>
