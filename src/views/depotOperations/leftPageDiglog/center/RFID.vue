<!-- RFID -->
<script setup lang="jsx">
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
    fromItem: [
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: 'RFID基站编码',
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
                berthCode: 'R103',
                bimCode: '一层下负一层通道第一个',
                berthType: '一楼',
                floor: '192.168.2.215',
                company: 'EPCglobal UHF Class 1 Gen 2 / ISO 18000-6C协议',
                berthState: '在线',
            },
            {
                berthCode: 'R103',
                bimCode: '一层下负一层通道第一个',
                berthType: '一楼',
                floor: '192.168.2.215',
                company: 'EPCglobal UHF Class 1 Gen 2 / ISO 18000-6C协议',
                berthState: '在线',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: 'RFID基站编码',
            },
            {
                prop: 'bimCode',
                label: '位置描述',
                width: 200,
            },
            {
                prop: 'berthType',
                label: '所属楼层',
            },
            {
                prop: 'floor',
                label: 'IP地址',
            },
            {
                prop: 'company',
                label: '链接协议',
                width: 400,
            },
            {
                prop: 'berthState',
                label: '状态',
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
                                onClick={e => {
                                    alert('删除');
                                }}
                            >
                                删除
                            </el-link>
                        );
                    },
                },
            ],
        },
    },
    totalCount: 100,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
