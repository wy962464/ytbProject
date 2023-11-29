<!-- 新增资产构件 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '模型名称：',
            labelWidth: 190,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入模型名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'uploadFile',
            label: '关联BIM：',
            labelWidth: 190,
            prop: 'namess',
            rules: [
                {
                    required: true,
                    message: '请选择导入模型文件',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '300px',
            },
        },
        {
            type: 'uploadFile',
            label: '上传模型图片：',
            labelWidth: 190,
            prop: 'names',
            rules: [
                {
                    required: true,
                    message: '请选择导入模型图片',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 190,
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
                width: '300px',
            },
        },
    ],
});
</script>

<template>
    <div class="addMemberProperty">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addMemberProperty {
    height: 100%;
    width: 100%;
}
</style>
