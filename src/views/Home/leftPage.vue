<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import Echarts from '@/components/common/Echarts.vue';
import { optionsPie } from '@/utils/echartsJson.js';
const cardPropsTop = reactive({
    title: '基本信息',
    isMore: false,
});
const cardPropsCenter = reactive({
    title: '公交车信息',
    isMore: false,
});
const cardPropsBottom = reactive({
    title: '摄像头信息',
    isMore: false,
});
function handlerClick() {
    alert('点击了');
}
const carList = {
    name: '盐田北综合车场',
    address: '深圳市盐田区北山道158号',
    unit: [
        {
            name: '深圳巴士集团',
        },
        {
            name: '深圳东部公交',
        },
        {
            name: '深圳西部公汽',
        },
    ],
};
const color = ['#1fff93', '#1ed5dd', '#509fec'];
const centerList = [
    {
        value: 72,
        list: [
            {
                name: '巴士集团',
                value: 50,
            },
            {
                name: '东部公交',
                value: 15,
            },
            {
                name: '西部公汽',
                value: 7,
            },
        ],
    },
    {
        value: 321,
        list: [
            {
                name: '巴士集团',
                value: 271,
            },
            {
                name: '东部公交',
                value: 12,
            },
            {
                name: '西部公汽',
                value: 38,
            },
        ],
    },
];
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop">
            <template #main>
                <div class="cardPropsTop_main">
                    <div class="left"></div>
                    <div class="right">
                        <p>车场名称：{{ carList.name }}</p>
                        <p>车场地址：{{ carList.address }}</p>
                        <div class="right_name">
                            <div>进驻单位：</div>
                            <div>
                                <p v-for="item in carList.unit" :key="item.name">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsCenter" @handlerClick="handlerClick">
            <template #topRight>今日运营车辆：393辆</template>
            <template #main>
                <div class="cardPropsCenter_main">
                    <div class="cardPropsCenter_mains">
                        <div class="center_mian" v-for="item in centerList" :key="item.name">
                            <div class="center_main_top">
                                <p>{{ item.value }}</p>
                                <p>在场车辆数(辆)</p>
                            </div>
                            <div
                                class="center_main_bottom"
                                v-for="(keys, index) in item.list"
                                :key="keys.name"
                            >
                                <div class="name">{{ keys.name }}</div>
                                <div class="num">{{ keys.value }}</div>
                                <div class="progress">
                                    <el-progress
                                        :text-inside="false"
                                        :stroke-width="10"
                                        :percentage="(keys.value / item.value) * 100"
                                        :color="color[index]"
                                        :format="() => ''"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center_center"></div>
                </div>
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom">
            <template #main>
                <Echarts :options="optionsPie" />
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
    .cardPropsTop_main {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 0px 10px 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            width: 137px;
            height: 188px;
            background: url('@/assets/images/homeImages/depotOperations/parking.png') no-repeat;
            background-size: 100% 100%;
        }
        .right {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            p {
                margin-bottom: 10px;
            }
            .right_name {
                display: flex;
                margin-bottom: 10px;
            }
        }
    }
    .cardPropsCenter_main {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 10px 20px 0 20px;
        display: flex;
        align-items: center;
        position: relative;
        .cardPropsCenter_mains {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            .center_mian {
                width: calc(50% - 5px);
                height: 100%;
                .center_main_top {
                    font-weight: 700;
                    font-size: 24px;
                    text-align: center;
                    color: #ffffff;
                    margin-bottom: 20px;
                    p:nth-child(2) {
                        font-weight: 600;
                        font-size: 16px;
                        text-align: center;
                        color: #1fff93;
                    }
                }
                .center_main_bottom {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                    font-size: 16px;
                    text-align: left;
                    color: #ffffff;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    :deep(.el-progress__text) {
                        min-width: 0px !important;
                    }
                    .num {
                        color: #1fff93;
                    }
                    .progress {
                        width: 95px;
                    }
                }
                .center_main_bottom:nth-child(3) {
                    .num {
                        color: #1ed5dd;
                    }
                }
                .center_main_bottom:nth-child(4) {
                    .num {
                        color: #509fec;
                    }
                }
            }
            .center_mian:nth-child(2) {
                .center_main_top {
                    p:nth-child(2) {
                        color: #ffa902;
                    }
                }
            }
        }
        .center_center {
            height: 100%;
            width: 1px;
            background: url('@/assets/images/homeImages/verticalLine.png') no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 49.5%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
