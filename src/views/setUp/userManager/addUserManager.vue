<!-- 新增用户信息 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '姓名：',
            labelWidth: 130,
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
                width: '300px',
            },
        },
        {
            type: 'select',
            label: '性别：',
            labelWidth: 130,
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
                width: '300px',
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
            label: '邮箱：',
            labelWidth: 130,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入邮箱',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'input',
            label: '电话：',
            labelWidth: 130,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入电话',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'select',
            label: '所属单位：',
            labelWidth: 130,
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
                width: '300px',
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
            type: 'textarea',
            label: '备注：',
            labelWidth: 130,
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
            type: 'input',
            label: '登录名：',
            labelWidth: 130,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入登录名',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'input',
            label: '登录密码：',
            labelWidth: 130,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入登录密码',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'input',
            label: '重复密码：',
            labelWidth: 130,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请再次输入密码',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'checkbox',
            label: '账号管理：',
            labelWidth: 130,
            prop: 'number',
            checkboxList: [
                {
                    name: '启用',
                    value: '0',
                },
                {
                    name: '账户过期',
                    value: '1',
                },
                {
                    name: '锁定',
                    value: '2',
                },
                {
                    name: '密码过期',
                    value: '3',
                },
            ],
            style: {
                width: '350px',
            },
        },
        {
            type: 'checkbox',
            label: '角色：',
            labelWidth: 130,
            prop: 'role',
            checkboxList: [
                {
                    name: '驾驶员',
                    value: '0',
                },
                {
                    name: '巡查管理员',
                    value: '1',
                },
                {
                    name: '设施处',
                    value: '2',
                },
                {
                    name: '场站保安 ',
                    value: '3',
                },
                {
                    name: '场站机电',
                    value: '4',
                },
                {
                    name: '运营组三级账号',
                    value: '5',
                },
                {
                    name: '场站综合',
                    value: '6',
                },
                {
                    name: '展示账号',
                    value: '7',
                },
                {
                    name: '调度人员',
                    value: '8',
                },
                {
                    name: '运维管理员',
                    value: '9',
                },
                {
                    name: '系统管理员',
                    value: '10',
                },
                {
                    name: '巡查人员',
                    value: '11',
                },
                {
                    name: '巡更员',
                    value: '12',
                },
            ],
            style: {
                width: '350px',
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
