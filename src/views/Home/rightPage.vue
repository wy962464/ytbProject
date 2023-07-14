<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import Echarts from '@/components/common/Echarts.vue';
import { optionsFold, optionsStacking } from '@/utils/echartsJson.js';
const cardPropsTop = reactive({
    title: '资产信息',
    isMore: false,
});
const cardPropsCenter = reactive({
    title: '楼宇设备监测',
    isMore: false,
});
const cardPropsBottom = reactive({
    title: '进出场统计',
    isMore: false,
});
const list = [
    {
        name: '生活水泵',
        value: 1,
        unit: '个',
        list: [
            {
                name: '运行',
                value: 1,
                unit: '个',
            },
            {
                name: '异常',
                value: 0,
                unit: '个',
            },
        ],
    },
    {
        name: '潜水泵',
        value: 8,
        unit: '个',
        list: [
            {
                name: '运行',
                value: 8,
                unit: '个',
            },
            {
                name: '异常',
                value: 0,
                unit: '个',
            },
        ],
    },
    {
        name: '一氧化碳',
        value: 3,
        unit: '个',
        list: [
            {
                name: '一号',
                value: 45.9,
                unit: 'ppm',
            },
            {
                name: '二号',
                value: 45.2,
                unit: 'ppm',
            },
            {
                name: '三号',
                value: 48.6,
                unit: 'ppm',
            },
        ],
    },
    {
        name: '送排风机',
        value: 24,
        unit: '个',
        list: [
            {
                name: '运行',
                value: 24,
                unit: '个',
            },
            {
                name: '异常',
                value: 0,
                unit: '个',
            },
        ],
    },
];
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop">
            <template #main>
                <Echarts :options="optionsStacking" />
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsCenter">
            <template #main>
                <div class="center_main">
                    <div class="details" v-for="item in list" :key="item.name">
                        <h1>{{ item.name }}（{{ item.value }}{{ item.unit }}）</h1>
                        <p v-for="key in item.list">
                            {{ key.name }}：{{ key.value }}{{ key.unit }}
                        </p>
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom">
            <template #main>
                <Echarts :options="optionsFold" />
            </template>
        </CardBox>
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
    .center_main {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px 10px 20px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        .details {
            box-sizing: border-box;
            width: 200px;
            height: 90px;
            margin-bottom: 10px;
            padding: 10px 0 0 10px;
            text-align: left;
            h1 {
                font-weight: 600;
                font-size: 16px;
                text-align: left;
                color: #ffffff;
            }
            p {
                font-weight: 400;
                font-size: 14px;
                text-align: left;
                color: #ffffff;
            }
        }
        .details:nth-child(1) {
            background: url('@/assets/images/homeImages/lifePump.png') no-repeat;
            background-size: 100% 100%;
        }
        .details:nth-child(2) {
            background: url('@/assets/images/homeImages/submersible.png') no-repeat;
            background-size: 100% 100%;
        }
        .details:nth-child(3) {
            background: url('@/assets/images/homeImages/monoxide.png') no-repeat;
            background-size: 100% 100%;
        }
        .details:nth-child(4) {
            background: url('@/assets/images/homeImages/exhaust.png') no-repeat;
            background-size: 100% 100%;
        }
    }
}
</style>
