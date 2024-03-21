<!-- 绑定区域 -->
<script setup lang="jsx">
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';

let handlerClick = row => {
    alert(JSON.stringify(row));
};
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
    isShowOperateBtn: true,
    otherBtnList: [
        {
            name: '保存',
            handlerClick: () => {
                alert('保存');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '摄像机名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一层',
                    value: '0',
                },
                {
                    label: '二层',
                    value: '1',
                },
                {
                    label: '三层',
                    value: '2',
                },
                {
                    label: '四层',
                    value: '3',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
            {
                berthCode: 'P0002',
                berthCodess: '1层全场配电房内南面',
                berthType: '二层',
                carType: '二层',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '摄像机编码',
                width: 120,
            },
            {
                prop: 'berthCodess',
                label: '摄像机名称',
                width: 190,
            },
            {
                prop: 'berthType',
                label: '所属楼层',
            },
            {
                prop: 'carType',
                label: '位置描述',
            },
        ],
        isSerialNumber: true,
        operatesBtnObj: {
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => handlerClick(row)}
                            >
                                添加
                            </el-link>
                        );
                    },
                },
            ],
        },
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
