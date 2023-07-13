<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import floorList from '@/components/common/floorList.vue';

const cardPropsTop = reactive({
    title: '进出视频监控',
    isMore: false,
});
const cardPropsBottom = reactive({
    title: '车辆进出场统计',
    isMore: false,
    isClick: true,
});
function handlerClick() {
    alert('点击了');
}
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardPropsTop"></CardBox>
        <CardBox v-model:cardProps="cardPropsBottom" @handlerClick="handlerClick">
            <template #topRight>过车管理</template>
        </CardBox>
        <floorList left="470" bottom="0" />
    </div>
</template>

<style scoped lang="scss">
.page {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: calc(100% / 3 - 10px) 1fr;
    grid-gap: 20px 0;
}
</style>
