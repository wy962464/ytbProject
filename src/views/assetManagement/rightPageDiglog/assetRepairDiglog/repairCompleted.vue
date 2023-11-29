<!-- 维修完成 -->
<script setup lang="jsx">
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'code',
            placeholder: '请输入维修单号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'person',
            placeholder: '请输入申请人',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'number',
            placeholder: '请输入设备编码',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
            {
                berthCode: 'SBWX-20201023-002',
                berthCodess: '2020-10-23 09:52:38',
                berthType: '管理员',
                number: '牌照抓拍控制器',
                brand: 'A-08-03-50-11-01-0002',
                position: '一层',
                floor: '牌照位置不对',
                notes: '200.75',
                status: '已完成',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '维修单号',
                width: 150,
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
                label: '申请时间',
                width: 150,
            },
            {
                prop: 'berthType',
                label: '申请人',
            },
            {
                prop: 'number',
                label: '设备名称',
                width: 120,
            },
            {
                prop: 'brand',
                label: '设备编码',
                width: 165,
            },
            {
                prop: 'position',
                label: '设备楼层',
            },
            {
                prop: 'floor',
                label: '维修说明',
            },
            {
                prop: 'notes',
                label: '维修金额(元)',
                width: 110,
            },
            {
                prop: 'status',
                label: '维修状态',
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
function handleNameClick(row) {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: `维修单号${row.berthCode}`,
            isShow: true,
            path: '/assetManagement/rightPageDiglog/detailassetRepairDiglog/detailRepairList',
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
