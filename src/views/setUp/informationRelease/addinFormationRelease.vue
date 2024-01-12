<!-- 新增消息信息 -->
<script setup>
import { reactive, ref } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

const newly = ref(null);
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '消息标题：',
            labelWidth: 200,
            prop: 'berthCode',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入消息标题',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '消息简述：',
            labelWidth: 200,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入消息简述',
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
    ],
});
</script>

<template>
    <div class="addinFormationRelease">
        <newlyAdded ref="newly" v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addinFormationRelease {
    height: 100%;
    width: 100%;
}
</style>
