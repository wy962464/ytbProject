<!-- 已完成 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';

let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
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
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => handleNameClick(row)}
                        >
                            {row.taskList}
                        </span>
                    );
                },
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
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handleNameClick = row => {
    console.log(row);
};
</script>

<template>
    <div class="completed">
        <tableBox v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.completed {
    width: 100%;
    height: 100%;
}
</style>
