<!-- 新增司机 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'uploadFile',
            label: '司机照片：',
            labelWidth: 100,
            prop: 'namess',
            rules: [
                {
                    required: true,
                    message: '请选择上传司机照片',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '200px',
            },
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
            type: 'treeSelect',
            label: '所属单位：',
            labelWidth: 100,
            prop: 'sex',
            placeholder: '请选择',
            rules: [
                {
                    required: true,
                    message: '请选择所属单位',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
            treeSelectList: [
                {
                    value: 1,
                    label: '深圳市交通公用设施建设中心',
                },
                {
                    value: 2,
                    label: '深圳市西部公共汽车有限公司',
                    children: [
                        {
                            value: 3,
                            label: '西部公汽第三分公司',
                        },
                        {
                            value: 4,
                            label: '西部公汽第一分公司',
                        },
                    ],
                },
            ],
        },
        {
            type: 'select',
            label: '所属车队：',
            labelWidth: 100,
            prop: 'berthType',
            rules: [
                {
                    required: true,
                    message: '请选择所属车队',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [],
        },
        {
            type: 'select',
            label: '所属线路：',
            labelWidth: 100,
            prop: 'comp',
            rules: [
                {
                    required: true,
                    message: '请选择所属线路',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [],
        },
        {
            type: 'select',
            label: '职位：',
            labelWidth: 100,
            prop: 'comp',
            rules: [
                {
                    required: true,
                    message: '请选择所属线路',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '驾驶员',
                    value: '1',
                },
            ],
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
                width: '200px',
            },
        },
    ],
});
</script>

<template>
    <div class="addDriverManage">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addDriverManage {
    height: 100%;
    width: 100%;
}
</style>
