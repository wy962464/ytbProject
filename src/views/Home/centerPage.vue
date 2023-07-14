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
        <CardBox class="CardBox" v-model:cardProps="cardPropsLeft" @handlerClick="handlerClick">
            <template #main>
                <Echarts :options="optionsStackingLeft" />
            </template>
            <template #topRight>总数：346个</template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsRight" @handlerClick="handlerClick">
            <template #main>
                <Echarts :options="optionsStackingRight" />
            </template>
            <template #topRight>总数：654个</template>
        </CardBox>
    </div>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    .CardBox:nth-child(1) {
        height: 100%;
        width: calc(100% / 2 - 10px);
    }
    .CardBox:nth-child(2) {
        height: 100%;
        width: calc(100% / 2 - 10px);
    }
}
</style>
