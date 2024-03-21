<!-- 新增车辆 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '车牌号：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入车牌号',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '车辆类型：',
            labelWidth: 100,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择车辆类型',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '公交车 ',
                    value: '1',
                },
                {
                    label: '私家车',
                    value: '2',
                },
                {
                    label: '其他',
                    value: '3',
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
            label: '车辆状态：',
            labelWidth: 100,
            prop: 'iphone',
            rules: [
                {
                    required: true,
                    message: '请选择车辆状态',
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
            type: 'input',
            label: '车型：',
            labelWidth: 100,
            prop: 'beizhu',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入车型',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            labelWidth: 100,
            label: '入驻时间：',
            type: 'datePicker',
            prop: 'datePicker',
            placeholder: '请选择入驻时间',
            rules: [
                {
                    required: true,
                    message: '请选择入驻时间',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '车主：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入车主',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '电话：',
            labelWidth: 100,
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
                width: '200px',
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
