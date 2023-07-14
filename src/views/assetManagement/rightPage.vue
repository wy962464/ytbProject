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
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop"></CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsCenter"
            @handlerClick="handlerClick"
        ></CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsBottom"
            @handlerClick="handlerClick"
        ></CardBox>
    </div>
</template>

<style scoped lang="scss">
.page {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .CardBox:nth-child(1) {
        height: calc(100% / 3 - 10px);
        margin-bottom: 20px;
    }
    .CardBox:nth-child(2) {
        height: calc(100% / 3 - 10px);
        margin-bottom: 20px;
    }
    .CardBox:nth-child(3) {
        height: calc(100% / 3 - 20px);
    }
}
</style>
