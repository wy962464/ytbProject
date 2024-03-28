<!-- 灭火器巡检 -->
<script setup lang="jsx">
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isShowQueryBtn: true,
    isShowOperateBtn: true,
    otherBtnList: [
        {
            name: '导出',
            handlerClick: () => {
                alert('导出');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'select',
            prop: 'direction',
            placeholder: '所在楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一楼',
                    value: '0',
                },
                {
                    label: '二楼',
                    value: '1',
                },
                {
                    label: '三楼',
                    value: '2',
                },
                {
                    label: '四楼',
                    value: '3',
                },
            ],
        },
        {
            type: 'daterange',
            prop: 'time',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            style: {
                width: '240px',
            },
        },
        {
            type: 'input',
            prop: 'name',
            placeholder: '请输入巡检人',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '手提式干粉灭火器',
                berthCodess: 'A-06-70-12-27-01-0019/01',
                berthType: 'XXXX',
                carType: '一层',
                park: '2023-07-07',
                direction: '正常',
                Entrance: '正常',
                q: '正常',
                w: '正常',
                e: '正常',
                r: '正常',
                t: '刘铭',
            },
            {
                berthCode: '手提式干粉灭火器',
                berthCodess: 'A-06-70-12-27-01-0019/01',
                berthType: 'XXXX',
                carType: '一层',
                park: '2023-07-07',
                direction: '正常',
                Entrance: '正常',
                q: '正常',
                w: '正常',
                e: '正常',
                r: '正常',
                t: '刘铭',
            },
            {
                berthCode: '手提式干粉灭火器',
                berthCodess: 'A-06-70-12-27-01-0019/01',
                berthType: 'XXXX',
                carType: '一层',
                park: '2023-07-07',
                direction: '正常',
                Entrance: '正常',
                q: '正常',
                w: '正常',
                e: '正常',
                r: '正常',
                t: '刘铭',
            },
            {
                berthCode: '手提式干粉灭火器',
                berthCodess: 'A-06-70-12-27-01-0019/01',
                berthType: 'XXXX',
                carType: '一层',
                park: '2023-07-07',
                direction: '正常',
                Entrance: '正常',
                q: '正常',
                w: '正常',
                e: '正常',
                r: '正常',
                t: '刘铭',
            },
            {
                berthCode: '手提式干粉灭火器',
                berthCodess: 'A-06-70-12-27-01-0019/01',
                berthType: 'XXXX',
                carType: '一层',
                park: '2023-07-07',
                direction: '正常',
                Entrance: '正常',
                q: '正常',
                w: '正常',
                e: '正常',
                r: '正常',
                t: '刘铭',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '资产名称',
                width: 120,
            },
            {
                prop: 'berthCodess',
                label: '资产编码',
                width: 190,
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => handleNameClick(row)}
                        >
                            {row.berthCodess}
                        </span>
                    );
                },
            },
            {
                prop: 'berthType',
                label: '安装部位',
            },
            {
                prop: 'carType',
                label: '所在楼层',
            },
            {
                prop: 'park',
                label: '巡检日期',
                width: 100,
            },
            {
                prop: 'direction',
                label: '表力压',
            },
            {
                prop: 'Entrance',
                label: '安全销',
            },
            {
                prop: 'q',
                label: '手柄',
            },
            {
                prop: 'w',
                label: '软管',
            },
            {
                prop: 'e',
                label: '瓶体',
            },
            {
                prop: 'r',
                label: '喷嘴',
            },
            {
                prop: 't',
                label: '巡检人',
            },
        ],
        isMultiple: true,
        selectionChangeList: [],
        isSerialNumber: true,
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
const handleNameClick = row => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: `灭火器巡检详情`,
            isShow: true,
            width: 700,
            height: 450,
            path: '/parkingSafety/rightPageDiglog/firePatrolInspection/detailsFireExtinguisher',
            obj: row,
        },
    });
};
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
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
</style>
