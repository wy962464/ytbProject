<!-- 用房管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';

let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '房间编号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '房间名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'select',
            prop: 'way',
            placeholder: '所属楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一楼',
                    value: '1',
                },
                {
                    label: '二楼',
                    value: '2',
                },
                {
                    label: '三楼',
                    value: '3',
                },
            ],
        },
    ],
    otherBtnList: [
        {
            name: '批量导出',
            handlerClick: () => {
                alert('批量导出');
            },
        },
        {
            name: '用房分配',
            handlerClick: () => {
                alert('用房分配');
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                endDate: '',
                remarks: '东北侧',
            },
            {
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                endDate: '',
                remarks: '东北侧',
            },
            {
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                endDate: '',
                remarks: '东北侧',
            },
            {
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                endDate: '',
                remarks: '东北侧',
            },
        ],
        tableHeader: [
            {
                prop: 'taskList',
                label: '房间区域名称',
            },
            {
                prop: 'sourceUnit',
                label: '房间编号',
            },
            {
                prop: 'person',
                label: '所属楼层',
            },
            {
                prop: 'opinion',
                label: '实际面积',
            },
            {
                prop: 'date',
                label: '功能属性',
            },
            {
                prop: 'state',
                label: '所属单位',
            },
            {
                prop: 'starDate',
                label: '开始使用日期',
            },
            {
                prop: 'endDate',
                label: '使用结束日期',
            },
            {
                prop: 'remarks',
                label: '备注',
            },
        ],
        isSerialNumber: true,
        isMultiple: true,
        selectionChangeList: [],
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <div class="housingManagement">
        <tableBox v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
:deep(.el-table__header .el-checkbox) {
    display: none;
}
:deep(.el-table__header thead tr) {
    th:nth-child(2) .cell {
        &::after {
            content: '操作';
        }
    }
}
.housingManagement {
    width: 100%;
    height: 100%;
}
</style>
