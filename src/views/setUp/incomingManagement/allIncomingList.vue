<!-- 来文清单 -->
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
            placeholder: '任务事项',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '来文单位',
            style: {
                width: '124px',
            },
        },
        {
            type: 'datePicker',
            prop: 'datePicker',
            placeholder: '发文日期',
            style: {
                width: '130px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                taskList: '2楼卫生间需要清理',
                sourceUnit: '场站公司',
                person: '刘骞',
                opinion: '无',
                date: '2020-10-30',
                state: '已处理',
                remarks: '',
            },
            {
                taskList: '2楼卫生间需要清理',
                sourceUnit: '场站公司',
                person: '刘骞',
                opinion: '无',
                date: '2020-10-30',
                state: '已处理',
                remarks: '',
            },
            {
                taskList: '2楼卫生间需要清理',
                sourceUnit: '场站公司',
                person: '刘骞',
                opinion: '无',
                date: '2020-10-30',
                state: '已处理',
                remarks: '',
            },
            {
                taskList: '2楼卫生间需要清理',
                sourceUnit: '场站公司',
                person: '刘骞',
                opinion: '无',
                date: '2020-10-30',
                state: '已处理',
                remarks: '',
            },
            {
                taskList: '2楼卫生间需要清理',
                sourceUnit: '场站公司',
                person: '刘骞',
                opinion: '无',
                date: '2020-10-30',
                state: '已处理',
                remarks: '',
            },
        ],
        tableHeader: [
            {
                prop: 'taskList',
                label: '任务清单',
            },
            {
                prop: 'sourceUnit',
                label: '来文单位',
            },
            {
                prop: 'person',
                label: '处理人',
            },
            {
                prop: 'opinion',
                label: '意见',
            },
            {
                prop: 'date',
                label: '发文日期',
            },
            {
                prop: 'state',
                label: '状态',
            },
            {
                prop: 'remarks',
                label: '备注',
            },
        ],
        isSerialNumber: true,
        operatesBtnObj: {
            width: 140,
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
                                            title: '任务详情',
                                            isShow: true,
                                            width: 700,
                                            height: 570,
                                            path: '/setUp/incomingManagement/detailsAllIncomingList',
                                        },
                                    });
                                }}
                            >
                                详情
                            </el-link>
                        );
                    },
                    hasPermi: ['details'],
                },
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    dialogStore.$patch({
                                        detailsDialogInfor: {
                                            title: '修改来文',
                                            isShow: true,
                                            isUpdate: true,
                                            obj: row,
                                            width: 700,
                                            height: 420,
                                            path: '/setUp/incomingManagement/addAllIncomingList',
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
const handleNameClick = row => {
    alert(JSON.stringify(row));
};
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增来文',
            isShow: true,
            width: 700,
            height: 420,
            path: '/setUp/incomingManagement/addAllIncomingList',
        },
    });
};
</script>

<template>
    <div class="allIncomingList">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.allIncomingList {
    width: 100%;
    height: 100%;
}
</style>
