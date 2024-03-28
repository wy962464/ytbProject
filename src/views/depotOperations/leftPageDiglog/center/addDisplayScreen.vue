<!-- 新增显示屏 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: 'LED屏名称：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入LED屏名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: 'LED屏编号：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入LED屏编号',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: 'IP地址：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入IP地址',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '端口：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入端口',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '屏宽（cm）：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入屏宽',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '屏高（cm）：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入屏高',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '显示屏类型：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择显示屏类型',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '枪机 ',
                    value: '1',
                },
                {
                    label: '球机',
                    value: '2',
                },
                {
                    label: '半球',
                    value: '3',
                },
                {
                    label: '其他',
                    value: '4',
                },
            ],
        },
        {
            type: 'select',
            label: '出入口：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择出入口',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '出口',
                    value: '1',
                },
                {
                    label: '入口',
                    value: '2',
                },
            ],
        },
        {
            type: 'select',
            label: '所属楼层：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择所属楼层',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '一层',
                    value: '1',
                },
                {
                    label: '二层',
                    value: '2',
                },
                {
                    label: '三层',
                    value: '3',
                },
                {
                    label: '四层',
                    value: '4',
                },
            ],
        },
        {
            type: 'select',
            label: '所属车间：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择所属车间',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '一层',
                    value: '1',
                },
                {
                    label: '二层',
                    value: '2',
                },
                {
                    label: '三层',
                    value: '3',
                },
                {
                    label: '四层',
                    value: '4',
                },
            ],
        },
        {
            type: 'select',
            label: '对应RFID设备：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择对应RFID设备',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '一层',
                    value: '1',
                },
                {
                    label: '二层',
                    value: '2',
                },
                {
                    label: '三层',
                    value: '3',
                },
                {
                    label: '四层',
                    value: '4',
                },
            ],
        },
        {
            type: 'select',
            label: '对应牌照相机：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择对应牌照相机',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '在线',
                    value: '1',
                },
                {
                    label: '离线',
                    value: '2',
                },
            ],
        },
        {
            type: 'input',
            label: '控制卡序列号：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入控制卡序列号',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '分辨率：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入分辨率',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
    ],
});
</script>

<template>
    <div class="addDisplayScreen">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addDisplayScreen {
    height: 100%;
    width: 100%;
}
</style>
