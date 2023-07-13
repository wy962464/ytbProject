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
    </div>
</template>

<style scoped lang="scss">
.page {
    display: grid;
    grid-gap: 0 20px;
    grid-template-columns: repeat(2, calc(50% - 10px));
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
</style>
