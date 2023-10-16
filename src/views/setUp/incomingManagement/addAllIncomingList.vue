<!-- 新增来文 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '来文单位：',
            labelWidth: 200,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入来文单位',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '任务事项：',
            labelWidth: 200,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入任务事项',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 200,
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
                width: '300px',
            },
        },
        {
            type: 'uploadFile',
            label: '上传附件：',
            labelWidth: 200,
            prop: 'names',
            rules: [
                {
                    required: true,
                    message: '请选择导入附件',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            styleType: 2,
            style: {
                width: '300px',
            },
        },
    ],
});
</script>

<template>
    <div class="addAppointment">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addAppointment {
    height: 100%;
    width: 100%;
}
</style>
