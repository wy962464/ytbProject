<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';

const cardProps = reactive({
    title: '',
    isMore: true,
});
function handlerClick() {
    alert('点击了');
}
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardProps" @handlerClick="handlerClick"></CardBox>
        <CardBox @handlerClick="handlerClick">
            <template #topRight>今日运营车辆：393辆</template>
        </CardBox>
        <CardBox v-model:cardProps="cardProps" @handlerClick="handlerClick"></CardBox>
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
