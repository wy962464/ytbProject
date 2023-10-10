<!-- 新增应急预案 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '预案名称：',
            labelWidth: 128,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入预案名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '预案类型：',
            labelWidth: 128,
            prop: 'type',
            rules: [
                {
                    required: true,
                    message: '请输入预案类型',
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
            label: '推送方式：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择推送方式',
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
            label: '推送内容：',
            labelWidth: 128,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入推送内容',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
        {
            type: 'textarea',
            label: '适用事件：',
            labelWidth: 128,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入适用事件',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
        {
            type: 'textarea',
            label: '危险因素分析：',
            labelWidth: 128,
            prop: 'analysis',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入危险因素分析',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
    ],
});
</script>

<template>
    <div class="addEmergencyPlan">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addEmergencyPlan {
    height: 100%;
    width: 100%;
}
</style>
