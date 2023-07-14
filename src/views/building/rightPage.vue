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
        <CardBox
            class="CardBox"
            v-model:cardProps="cardProps"
            @handlerClick="handlerClick"
        ></CardBox>
        <CardBox class="CardBox" @handlerClick="handlerClick">
            <template #topRight>今日运营车辆：393辆</template>
        </CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardProps"
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
