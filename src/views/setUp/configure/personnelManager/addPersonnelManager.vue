<!-- 新增员工信息 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'uploadFile',
            label: '员工照片：',
            labelWidth: 100,
            prop: 'namess',
            rules: [
                {
                    required: true,
                    message: '请选择上传员工照片',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '所属单位：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择所属单位',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '立得空间信息技术股份有限公司 ',
                    value: '1',
                },
                {
                    label: '深圳特来电新能源有限公司',
                    value: '2',
                },
                {
                    label: '深圳市交通公用设施建设中心',
                    value: '3',
                },
            ],
        },
        {
            type: 'input',
            label: '姓名：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '性别：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择性别',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '男 ',
                    value: '1',
                },
                {
                    label: '女',
                    value: '2',
                },
            ],
        },
        {
            type: 'input',
            label: '职位：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入职位',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '联系电话：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入联系电话',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'textarea',
            label: '联系地址：',
            labelWidth: 100,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入联系地址',
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
                width: '510px',
            },
        },
    ],
});
</script>

<template>
    <div class="addPersonnelManager">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addPersonnelManager {
    height: 100%;
    width: 100%;
}
</style>
