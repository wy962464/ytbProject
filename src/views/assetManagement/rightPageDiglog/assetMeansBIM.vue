<!-- 资产BIM -->
<script setup>
import floorList from '@/components/common/floorList.vue';
</script>

<template>
    <floorList style="z-index: 1" top="20" />
    <div class="assetMeansBIM"></div>
</template>

<style scoped lang="scss">
.assetMeansBIM {
    height: 260px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #00000075;
}
</style>
