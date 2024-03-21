<!-- 新增会议室预约 -->
<script setup>
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'select',
            label: '预约房间编号：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择房间编号',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    label: '980会议室',
                    value: '1',
                },
            ],
        },
        {
            type: 'input',
            label: '会议室名称：',
            labelWidth: 128,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入会议室名称',
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
            labelWidth: 128,
            label: '预约日期：',
            type: 'datePicker',
            prop: 'datePicker',
            placeholder: '预约日期',
            rules: [
                {
                    required: true,
                    message: '请选择预约日期',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '开始时间：',
            labelWidth: 128,
            prop: 'sliderStartTime',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入开始时间',
                    trigger: ['change', 'blur'],
                },
            ],
            disabled: true,
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '结束时间：',
            labelWidth: 128,
            prop: 'sliderEndTime',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入结束时间',
                    trigger: ['change', 'blur'],
                },
            ],
            disabled: true,
            style: {
                width: '200px',
            },
        },
        {
            type: 'slider',
            prop: 'slider',
            labelWidth: 60,
            style: {
                width: '600px',
                height: '70px',
            },
            input: value => {
                if (value && value.length > 0) {
                    let time = value.map(item => {
                        let remainder = item % 6;
                        let time = parseInt(item / 6) + 8;
                        return `${time >= 10 ? time : `0${time}`}:${remainder}0`;
                    });
                    tableFromOption.modelFormValue.sliderStartTime = time[0];
                    tableFromOption.modelFormValue.sliderEndTime = time[1];
                }
            },
        },
        {
            type: 'select',
            label: '预约单位：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择预约单位',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [
                {
                    value: 1,
                    label: '深圳市交通公用设施建设中心',
                },
                {
                    value: 2,
                    label: '立得空间信息技术股份有限公司 ',
                },
                {
                    value: 3,
                    label: '深圳市交通公用设施管理局',
                },
            ],
        },
        {
            type: 'input',
            label: '参与人数：',
            labelWidth: 128,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入参与人数',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'textarea',
            label: '会议主题：',
            labelWidth: 128,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入会议主题',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
        {
            type: 'textarea',
            label: '会议内容：',
            labelWidth: 128,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入会议内容',
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
