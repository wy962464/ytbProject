<!-- 新增资产 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'treeSelect',
            label: '资产类别：',
            labelWidth: 120,
            prop: 'type',
            placeholder: '请选择',
            suffixIcon: 'Search',
            rules: [
                {
                    required: true,
                    message: '请输入资产类别',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '资产名称：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入资产名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '资产编码：',
            labelWidth: 120,
            prop: 'code',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入资产编码',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '型号：',
            labelWidth: 120,
            prop: 'typeNum',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入型号',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '品牌：',
            labelWidth: 120,
            prop: 'brand',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入品牌',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '责任人：',
            labelWidth: 120,
            prop: 'person',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入责任人',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '价格(元)：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入价格',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '楼层：',
            labelWidth: 120,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择楼层',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
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
            type: 'select',
            label: '房间区域：',
            labelWidth: 120,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择房间区域',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
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
            label: '保质期：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入保质期',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'uploadFile',
            label: '关联模型：',
            labelWidth: 120,
            prop: 'names',
            rules: [
                {
                    required: true,
                    message: '请选择导入关联模型',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            styleType: 1,
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 120,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入备注',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
    ],
    treeSelectList: [
        {
            value: 1,
            label: '配电系统',
            children: [
                {
                    value: 2,
                    label: '低压柜',
                },
                {
                    value: 3,
                    label: '变压器',
                },
                {
                    value: 4,
                    label: '高压柜',
                },
                {
                    value: 5,
                    label: '补偿柜',
                },
            ],
        },
        {
            value: 6,
            label: '二供水系统',
            children: [
                {
                    value: 7,
                    label: '给水泵',
                },
            ],
        },
        {
            value: 8,
            label: '供排水系统',
            children: [
                {
                    value: 9,
                    label: '潜水泵',
                },
            ],
        },
        {
            value: 10,
            label: '供排水系统',
            children: [
                {
                    value: 11,
                    label: '整体网络架构系统',
                },
                {
                    value: 12,
                    label: '管理服务器及主机',
                },
                {
                    value: 13,
                    label: '车辆识别监控',
                },
                {
                    value: 14,
                    label: '道闸系统',
                },
            ],
        },
    ],
});
</script>

<template>
    <div class="addAssets">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addAssets {
    height: 100%;
    width: 100%;
}
</style>
