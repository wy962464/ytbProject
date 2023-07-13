<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import Echarts from '@/components/common/Echarts.vue';
import { optionsStackingLeft, optionsStackingRight } from '@/utils/echartsJson.js';

const cardPropsLeft = reactive({
    title: '充电桩统计',
    isMore: false,
});
const cardPropsRight = reactive({
    title: '泊位实时统计',
    isMore: false,
});
function handlerClick() {
    alert('点击了');
}
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardPropsLeft" @handlerClick="handlerClick">
            <template #main>
                <Echarts :options="optionsStackingLeft" />
            </template>
            <template #topRight>总数：346个</template>
        </CardBox>
        <CardBox v-model:cardProps="cardPropsRight" @handlerClick="handlerClick">
            <template #main>
                <Echarts :options="optionsStackingRight" />
            </template>
            <template #topRight>总数：654个</template>
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
