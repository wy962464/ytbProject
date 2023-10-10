<!-- 新增安全风险源 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '风险源名称：',
            labelWidth: 128,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入风险源名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '风险等级：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择风险等级',
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
            label: '所在楼层：',
            labelWidth: 128,
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
            label: '风险源地点：',
            labelWidth: 128,
            prop: 'type',
            rules: [
                {
                    required: true,
                    message: '请输入风险源地点',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请输入',
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '责任单位：',
            labelWidth: 128,
            prop: 'type',
            rules: [
                {
                    required: true,
                    message: '请输入责任单位',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请输入',
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '责任人：',
            labelWidth: 128,
            prop: 'type',
            rules: [
                {
                    required: true,
                    message: '请输入责任人',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请输入',
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '风险源归属：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择风险源归属',
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
            type: 'textarea',
            label: '隐患内容：',
            labelWidth: 128,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入隐患内容',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
    ],
});
</script>

<template>
    <div class="addSecurityRisk">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addSecurityRisk {
    height: 100%;
    width: 100%;
}
</style>
