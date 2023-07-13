<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';

const cardPropsTop = reactive({
    title: '资产管理',
});
const cardPropsCenter = reactive({
    title: '资产维修',
    isMore: true,
    isClick: true,
});
const cardPropsBottom = reactive({
    title: '资产BIM构件库',
});
function handlerClick() {
    alert('点击了');
}
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardPropsTop"></CardBox>
        <CardBox v-model:cardProps="cardPropsCenter" @handlerClick="handlerClick"></CardBox>
        <CardBox v-model:cardProps="cardPropsBottom" @handlerClick="handlerClick"></CardBox>
    </div>
</template>

<style scoped lang="scss">
.page {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: calc(100% / 3 - 10px) calc(100% / 3 - 10px) calc(100% / 3 - 20px);
    grid-gap: 20px 0;
}
</style>
