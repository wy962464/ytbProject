<!-- 线路管理 -->
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
            placeholder: '线路名称',
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
        {
            type: 'input',
            prop: 'name',
            placeholder: '所属车队',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                name: 'M206',
                berthType: '西部公汽三分公司',
                comp: '光明中心车队',
                beizhu: '',
                domainList: [
                    {
                        time1: '00:10',
                        time2: '00:10',
                        number: 10,
                    },
                ],
            },
            {
                name: 'M347',
                berthType: '巴士集团第五分公司',
                comp: '梧桐车队',
                beizhu: '',
                domainList: [
                    {
                        time1: '00:10',
                        time2: '00:10',
                        number: 10,
                    },
                ],
            },
            {
                name: 'M105',
                berthType: '巴士集团第四分公司',
                comp: '秀峰车队',
                beizhu: '',
                domainList: [
                    {
                        time1: '00:10',
                        time2: '00:10',
                        number: 10,
                    },
                ],
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '线路名称',
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
                                            title: '修改线路',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 750,
                                            height: 500,
                                            obj: row,
                                            path: '/setUp/record/lineManage/addLineManage',
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
    totalCount: 1,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增线路',
            isShow: true,
            width: 750,
            height: 500,
            path: '/setUp/record/lineManage/addLineManage',
        },
    });
};
</script>

<template>
    <div class="lineManage">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.lineManage {
    width: 100%;
    height: 100%;
}
</style>
