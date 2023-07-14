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
