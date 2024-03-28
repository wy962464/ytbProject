<!-- 资产空间管理--设置 -->
<script setup>
import systemMain from '@/components/common/systemMain.vue';
import { reactive } from 'vue';

let systemMainOption = reactive({
    path: [
        {
            name: '空间管理',
            component: '/assetManagement/rightPageDiglog/spaceManagement',
        },
        {
            name: '资产搬迁',
            component: '/assetManagement/rightPageDiglog/assetRelocation',
        },
    ],
    tabSeletNum: 0,
});
</script>

<template>
    <component :is="systemMain" v-model:systemMainOption="systemMainOption"></component>
</template>

<style scoped lang="scss"></style>
