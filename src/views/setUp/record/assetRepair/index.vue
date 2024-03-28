<!-- 资产维修--设置 -->
<script setup>
import systemMain from '@/components/common/systemMain.vue';
import { reactive } from 'vue';

let systemMainOption = reactive({
    path: [
        {
            name: '维修清单',
            component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairList',
        },
        {
            name: '待派单',
            component: '/assetManagement/rightPageDiglog/assetRepairDiglog/waitingList',
            value: '0',
        },
        {
            name: '待接单',
            component: '/assetManagement/rightPageDiglog/assetRepairDiglog/pendingOrders',
            value: '1',
        },
        {
            name: '维修中',
            component: '/assetManagement/rightPageDiglog/assetRepairDiglog/underRepair',
            value: '4',
        },
        {
            name: '维修完成',
            component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairCompleted',
            value: '7',
        },
    ],
    tabSeletNum: 0,
});
</script>

<template>
    <component :is="systemMain" v-model:systemMainOption="systemMainOption"></component>
</template>

<style scoped lang="scss"></style>
