<script setup>
import { reactive, ref } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import floorList from '@/components/common/floorList.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
const cardPropsTop = reactive({
    title: '泊位管理',
    isMore: true,
});
const cardPropsCenter = reactive({
    title: '设备管理',
    isMore: true,
});
const cardPropsBottom = reactive({
    title: '充电情况',
    isMore: true,
});
const topList = [
    {
        name: '已占泊位',
        value: 279,
    },
    {
        name: '剩余泊位',
        value: 168,
    },
];
const centerList = [
    {
        name: '修车沟',
        value: 12,
        unit: '间',
    },
    {
        name: '会议室',
        value: 6,
        unit: '间',
    },
    {
        name: 'RFID',
        value: 34,
        unit: '个',
    },
    {
        name: '显示屏',
        value: 125,
        unit: '个',
    },
];
const bottomList = [
    {
        textList: [
            {
                name: '充电中',
                value: 215,
                unit: '个',
                color: '#01DFF4',
            },
            {
                name: '占用(未充电)',
                value: 123,
                unit: '个',
                color: '#FDFF35',
            },
        ],
    },
    {
        textList: [
            {
                name: '空闲中',
                value: 121,
                unit: '个',
                color: '#23F790',
            },
            {
                name: '离线中',
                value: 38,
                unit: '个',
                color: '#000000',
            },
            {
                name: '故障',
                value: 9,
                unit: '个',
                color: '#EB3C34',
            },
        ],
    },
    {
        textList: [
            {
                name: '交流桩',
                value: 18,
                unit: '个',
                color: '#01DFF4',
            },
            {
                name: '直流桩',
                value: 330,
                unit: '个',
                color: '#1FFF93',
            },
        ],
    },
];
function handlerClickTop() {
    dialogStore.$patch({
        dialogInfor: {
            title: '泊位管理',
            isShow: true,
            path: [
                {
                    name: '泊位分类',
                    component: '/depotOperations/leftPageDiglog/top/berthSortDiglog',
                },
                {
                    name: '泊位列表',
                    component: '/depotOperations/leftPageDiglog/top/berthListDiglog',
                },
            ],
        },
    });
}
function handlerClickCenter() {
    dialogStore.$patch({
        dialogInfor: {
            title: '设备管理',
            isShow: true,
            path: [
                {
                    name: '修车沟',
                    component: '/depotOperations/leftPageDiglog/center/repairDitch',
                },
                {
                    name: '会议室',
                    component: '/depotOperations/leftPageDiglog/center/meetingRoom',
                },
                {
                    name: 'RFID',
                    component: '/depotOperations/leftPageDiglog/center/RFID',
                },
                {
                    name: '显示屏',
                    component: '/depotOperations/leftPageDiglog/center/displayScreen',
                },
            ],
            width: 1280,
            height: 685,
        },
    });
}
function handlerClickBottom() {
    dialogStore.$patch({
        dialogInfor: {
            title: '充电情况',
            isShow: true,
            path: [
                {
                    name: '充电统计',
                    component: '/depotOperations/leftPageDiglog/bottom/charging',
                },
                {
                    name: '各楼层情况',
                    component: '/depotOperations/leftPageDiglog/bottom/floorSituation',
                },
            ],
        },
    });
}
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop" @handlerClick="handlerClickTop">
            <template #main>
                <div class="main_top">
                    <div class="img"></div>
                    <div class="text" v-for="item in topList" :key="item.name">
                        <p>{{ item.value }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsCenter"
            @handlerClick="handlerClickCenter"
        >
            <template #main>
                <div class="main_center">
                    <div class="bg"></div>
                    <div class="details">
                        <div class="details_page" v-for="item in centerList" :key="item.name">
                            <div class="text">
                                <p>{{ item.value }}</p>
                                <p>{{ item.name }}({{ item.unit }})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsBottom"
            @handlerClick="handlerClickBottom"
        >
            <template #main>
                <div class="main_bottom">
                    <div class="main_bottom_left"></div>
                    <div class="main_bottom_right">
                        <div class="text" v-for="item in bottomList" :key="item.name">
                            <el-space :size="40">
                                <div v-for="key in item.textList">
                                    <div class="text_main_page">
                                        <p>{{ key.name }}</p>
                                        <p>
                                            <span class="valueStyle" :style="{ color: key.color }">
                                                {{ key.value }}
                                            </span>
                                            {{ key.unit }}
                                        </p>
                                    </div>
                                </div>
                            </el-space>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </template>
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
    position: relative;
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
    .main_top {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 20px 0 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .img {
            width: 137px;
            height: 188px;
            background: url('@/assets/images/homeImages/depotOperations/parking.png') no-repeat;
            background-size: 100% 100%;
        }
        .text:nth-child(2),
        .text:nth-child(3) {
            width: calc((100% - 137px) / 2);
        }
        .text:nth-child(2) {
            p:nth-child(1) {
                font-weight: 500;
                font-size: 36px;
                text-align: center;
                color: #ff9829;
            }
            p:nth-child(2) {
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                color: #ffffff;
            }
        }
        .text:nth-child(3) {
            p:nth-child(1) {
                font-weight: 500;
                font-size: 36px;
                text-align: center;
                color: #1fff93;
            }
            p:nth-child(2) {
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                color: #ffffff;
            }
        }
    }
    .main_center {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-bottom: 20px;
        position: relative;
        .bg {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            height: 70px;
            background: url('@/assets/images/homeImages/depotOperations/leftCenterBg.png') no-repeat;
            background-size: 100% 100%;
        }
        .details {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, calc(100% / 4 - 18px));
            gap: 0 10px;
            padding: 20px 0 27px 0;
            justify-content: center;
            align-items: flex-end;
            box-sizing: border-box;
            .details_page {
                width: 92px;
                height: 150px;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                .text {
                    font-weight: 500;
                    font-size: 14px;
                    text-align: center;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    p:nth-child(1) {
                        font-weight: 900;
                        font-size: 24px;
                        text-align: center;
                        color: #1fff93;
                    }
                }
            }
            .details_page:nth-child(1) {
                background: url('@/assets/images/homeImages/depotOperations/car.png') no-repeat;
                background-position: bottom;
            }
            .details_page:nth-child(2) {
                background: url('@/assets/images/homeImages/depotOperations/Room.png') no-repeat;
                background-position: bottom;
            }
            .details_page:nth-child(3) {
                background: url('@/assets/images/homeImages/depotOperations/RFID.png') no-repeat;
                background-position: bottom;
            }
            .details_page:nth-child(4) {
                background: url('@/assets/images/homeImages/depotOperations/led.png') no-repeat;
                background-position: bottom;
            }
        }
    }
    .main_bottom {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: relative;
        .main_bottom_left {
            width: 144px;
            height: 144px;
            background: url('@/assets/images/homeImages/depotOperations/charge_bg.png') no-repeat;
            background-size: 100% 100%;
        }
        .main_bottom_right {
            width: 250px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .text {
                height: 50px;
                width: 100%;
                background: url('@/assets/images/homeImages/depotOperations/branch_bg.png')
                    no-repeat;
                background-size: 100% 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                box-sizing: border-box;
                padding-left: 10px;
                .text_main_page {
                    font-weight: 500;
                    font-size: 12px;
                    text-align: left;
                    color: #ffffff;
                    .valueStyle {
                        font-weight: 500;
                        font-size: 18px;
                        text-align: left;
                        line-height: 21px;
                    }
                }
            }
        }
        .line {
            position: absolute;
            border-top: 1px dashed #168abb;
        }
        .line:nth-child(3) {
            width: 30px;
            left: 160px;
            top: 50%;
            transform: translate(0, -50%);
        }
        .line:nth-child(4) {
            width: 60px;
            left: 145px;
            top: 31%;
            transform: rotate(-60deg);
        }
        .line:nth-child(5) {
            width: 60px;
            left: 145px;
            bottom: 30%;
            transform: rotate(60deg);
        }
    }
}
</style>
