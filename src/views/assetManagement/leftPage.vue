<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';

const cardProps = reactive({
    title: '资产可视化',
});
function handlerClick() {
    alert('点击了');
}
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardProps"></CardBox>
        <floorList left="470" bottom="0" />
    </div>
</template>

<style scoped lang="scss">
.page {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
</style>
