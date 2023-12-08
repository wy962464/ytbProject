<!-- 新增应急响应程序 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {
        domainList: [
            {
                value: '',
            },
        ],
    },
    fromItem: [
        {
            type: 'textarea',
            label: '处置措施：',
            labelWidth: 100,
            prop: 'berthCode',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入处置措施',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
        {
            type: 'textarea',
            label: '描述：',
            labelWidth: 100,
            prop: 'berthCodess',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入描述',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
        {
            type: 'vnodes',
            label: '添加程序：',
            labelWidth: 100,
            render: () => {
                return (
                    <div class={'programsBtn'} onClick={() => handlerAddDomain()}>
                        添加
                    </div>
                );
            },
        },
        {
            type: 'domains',
            labelWidth: 100,
            style: {
                width: '520px',
            },
        },
    ],
});
const handlerAddDomain = () => {
    tableFromOption.modelFormValue.domainList.push({
        value: '',
    });
};
</script>

<template>
    <div class="addEmergencyProcedures">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addEmergencyProcedures {
    height: 100%;
    width: 100%;
}
</style>
