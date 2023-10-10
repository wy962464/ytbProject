<!-- 来文管理 -->
<script setup>
import systemMain from '@/components/common/systemMain.vue';
import { reactive } from 'vue';

let systemMainOption = reactive({
    path: [
        {
            name: '来文清单',
            component: '/setUp/incomingManagement/allIncomingList',
        },
        {
            name: '待下派',
            component: '/setUp/incomingManagement/toBeDispatched',
            value: 10,
        },
        {
            name: '待处理',
            component: '/setUp/incomingManagement/pendingProcessing',
            value: 20,
        },
        {
            name: '已处理',
            component: '/setUp/incomingManagement/processed',
            value: 30,
        },
        {
            name: '已完成',
            component: '/setUp/incomingManagement/completed',
            value: 40,
        },
    ],
    tabSeletNum: 0,
});
</script>

<template>
    <component :is="systemMain" v-model:systemMainOption="systemMainOption"></component>
</template>

<style scoped lang="scss"></style>
