<!-- 资产搬迁 -->
<script setup>
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';

let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    modelFormValue: {},
    isShowTable: true,
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '请输入资产编号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'names',
            placeholder: '请输入资产名称',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
            {
                berthCode: 'A-06-70-11-15-01-0011',
                berthCodess: '消火栓箱',
                berthType: 'XXXX',
                number: '2023-08-01',
                brand: '一层',
                position: '正常',
                floor: '七层',
                time: '负一层',
                notes: '正常调动',
                content: '',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '资产编号',
                width: 165,
            },
            {
                prop: 'berthCodess',
                label: '资产类型',
            },
            {
                prop: 'berthType',
                label: '申请人姓名',
            },
            {
                prop: 'number',
                label: '变动日期',
            },
            {
                prop: 'brand',
                label: '原楼层',
            },
            {
                prop: 'position',
                label: '原房间区域',
            },
            {
                prop: 'floor',
                label: '变动楼层',
            },
            {
                prop: 'time',
                label: '变动房间区域',
            },
            {
                prop: 'notes',
                label: '变动原因',
            },
            {
                prop: 'content',
                label: '备注',
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <div class="assetRelocation">
        <tableBox ref="tableFromRef" v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.assetRelocation {
    width: 100%;
    height: 100%;
}
</style>
