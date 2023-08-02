<!-- 消防栓巡检 -->
<script setup>
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';

let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
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
                berthCode: '消火栓箱',
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
                berthCode: '消火栓箱',
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
                berthCode: '消火栓箱',
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
                berthCode: '消火栓箱',
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
                berthCode: '消火栓箱',
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
                label: '箱体',
            },
            {
                prop: 'Entrance',
                label: '玻璃',
            },
            {
                prop: 'q',
                label: '水带',
            },
            {
                prop: 'w',
                label: '水枪',
            },
            {
                prop: 'e',
                label: '接头',
            },
            {
                prop: 'r',
                label: '闸门',
            },
            {
                prop: 't',
                label: '巡检人',
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 5,
    pageSize: 13,
    pageNo: 1,
});
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
