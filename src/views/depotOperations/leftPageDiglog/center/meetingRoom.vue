<!-- 会议室 -->
<script setup>
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
let tableFromOption = reactive({
    isShowForm: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    isShowTable: true,
    modelFormValue: {},
    labelWidth: 0,
    fromItem: [
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: '请输入会议室编号',
            style: {
                width: '140px',
            },
        },
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthName',
            rules: [],
            placeholder: '请输入会议室名称',
            style: {
                width: '140px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '123会议室',
                bimCode: '123会议室',
                berthType: '一楼',
                floor: '30人',
                company: '是',
                berthState: '',
            },
            {
                berthCode: '123会议室',
                bimCode: '123会议室',
                berthType: '一楼',
                floor: '30人',
                company: '是',
                berthState: '',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '会议室编号',
            },
            {
                prop: 'bimCode',
                label: '会议室名称',
                width: '230',
            },
            {
                prop: 'berthType',
                label: '所在楼层',
            },
            {
                prop: 'floor',
                label: '容纳人数',
            },
            {
                prop: 'company',
                label: '是否有投影仪',
            },
            {
                prop: 'berthState',
                label: '备注',
            },
        ],
        serialNumber: true,
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
