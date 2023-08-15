<!-- 报警管理 -->
<script setup lang="jsx">
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
    isShowOperateBtn: true,
    otherBtnList: [
        {
            name: '处置',
            handlerClick: () => {
                console.log('处置');
            },
        },
        {
            name: '撤警',
            handlerClick: () => {
                console.log('撤警');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'select',
            prop: 'direction',
            placeholder: '警报类型',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '应急预案',
                    value: '0',
                },
                {
                    label: '出场',
                    value: '1',
                },
            ],
        },
        {
            type: 'select',
            prop: 'Entrance',
            placeholder: '警报等级',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '较轻',
                    value: '0',
                },
                {
                    label: '严重',
                    value: '1',
                },
            ],
        },
        {
            type: 'select',
            prop: 'status',
            placeholder: '警报状态',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '未处理',
                    value: '0',
                },
                {
                    label: '处理中',
                    value: '1',
                },
                {
                    label: '已处理',
                    value: '2',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: 'RC-20230323-232',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
            {
                berthCode: 'RC-20230323-110',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
            {
                berthCode: 'RC-20230323-159',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
            {
                berthCode: 'RC-20230323-258',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
            {
                berthCode: 'RC-20230323-367',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
            {
                berthCode: 'RC-20230323-232',
                berthCodess: '应急预案已启动: 充电车辆起火应急…',
                berthType: '应急预案',
                carType: '严重',
                park: '2023-03-23 09:46:15',
                direction: '2023-06-27 14:57:41',
                Entrance: '已处理',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '警报编号',
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => handleNameClick(row)}
                        >
                            {row.berthCode}
                        </span>
                    );
                },
            },
            {
                prop: 'berthCodess',
                label: '告警描述',
                width: 240,
            },
            {
                prop: 'berthType',
                label: '警报类别',
            },
            {
                prop: 'carType',
                label: '警报等级',
            },
            {
                prop: 'park',
                label: '告警触发时间',
            },
            {
                prop: 'direction',
                label: '告警恢复时间',
            },
            {
                prop: 'Entrance',
                label: '警报状态',
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
function handleNameClick(row) {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: `警报编号${row.berthCode}`,
            isShow: true,
            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/tablerRowDetails',
            obj: {
                ...row,
            },
        },
    });
}
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
