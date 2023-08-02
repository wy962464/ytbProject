<!-- 显示屏 -->
<script setup>
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    isShowTable: true,
    modelFormValue: {},
    labelWidth: 0,
    otherBtnList: [
        {
            name: '发布',
            handlerClick: () => {
                alert('发布');
            },
        },
        {
            name: '重置',
            handlerClick: () => {
                alert('重置');
            },
        },
    ],
    fromItem: [
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: '显示屏名称',
            style: {
                width: '140px',
            },
        },
        {
            type: 'select',
            label: '',
            labelWidth: 0,
            prop: 'floor',
            rules: [],
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
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthName',
            rules: [],
            placeholder: 'IP地址',
            style: {
                width: '140px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '入口显示屏',
                bimCode: '出入口显示屏',
                berthType: '',
                floor: '192.168.2.215',
                company: '8800',
                berthState: '一楼',
                state: '在线',
                content: '',
            },
            {
                berthCode: '7L—6→7',
                bimCode: '楼层显示屏',
                berthType: '384*96',
                floor: '192.168.2.67',
                company: '5050',
                berthState: '七楼',
                state: '在线',
                content: '剩余位:34 总车位:67',
            },
            {
                berthCode: '7L—6→7',
                bimCode: '楼层显示屏',
                berthType: '384*96',
                floor: '192.168.2.67',
                company: '5050',
                berthState: '七楼',
                state: '在线',
                content: '剩余位:34 总车位:67',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '显示屏名称',
            },
            {
                prop: 'bimCode',
                label: '显示屏类型',
            },
            {
                prop: 'berthType',
                label: '分辨率',
            },
            {
                prop: 'floor',
                label: 'IP地址',
                width: 150,
            },
            {
                prop: 'company',
                label: '端口号',
            },
            {
                prop: 'berthState',
                label: '所属楼层',
            },
            {
                prop: 'state',
                label: '状态',
            },
            {
                prop: 'content',
                label: '当前显示内容',
                width: 200,
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 100,
    pageSize: 10,
    pageNo: 1,
});
function handleCurrentChange(val) {
    console.log(`页码${val}`);
}
</script>

<template>
    <tableBox
        v-model:tableFromOption="tableFromOption"
        @handleCurrentChange="handleCurrentChange"
    />
</template>

<style scoped lang="scss"></style>
