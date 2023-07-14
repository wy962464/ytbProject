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
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop"></CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom" @handlerClick="handlerClick">
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
    display: flex;
    flex-direction: column;
    .CardBox:nth-child(1) {
        height: calc(100% / 2 - 10px);
        margin-bottom: 20px;
    }
    .CardBox:nth-child(2) {
        flex-grow: 1;
    }
}
</style>
