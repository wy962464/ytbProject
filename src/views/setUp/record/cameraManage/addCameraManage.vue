<!-- 新增摄像机 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '摄像机编码：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入摄像机编码',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '摄像机名称：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入摄像机名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '摄像机类型：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择摄像机类型',
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
            label: '摄像机类别：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择摄像机类别',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '视频监控摄像机',
                    value: '1',
                },
                {
                    label: '牌照识别摄像机',
                    value: '2',
                },
                {
                    label: '高空云平台摄像机',
                    value: '3',
                },
                {
                    label: '车位识别摄像机',
                    value: '4',
                },
            ],
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
            type: 'select',
            label: '所在楼层：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择所在楼层',
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
            label: '工作状态：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择工作状态',
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
            type: 'textarea',
            label: '位置描述：',
            labelWidth: 100,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入位置描述',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '510px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 100,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入备注',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '510px',
            },
        },
    ],
});
</script>

<template>
    <div class="addBusInfor">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addBusInfor {
    height: 100%;
    width: 100%;
}
</style>
