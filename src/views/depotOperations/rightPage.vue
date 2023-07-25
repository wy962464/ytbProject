<script lang="jsx" setup>
import { reactive, ref } from 'vue';
import { cameraData } from '@/utils/modelMethod.js';
import CardBox from '@/components/common/cardBox.vue';
import { DialogStore } from '@/store/modules/dialog.js';
import tableBox from '@/components/common/table.vue';

function assetsImages(url) {
    return new URL(url, import.meta.url).href;
}
const dialogStore = DialogStore();
const cardPropsTop = reactive({
    title: '车辆状况',
    isMore: true,
});
const cardPropsBottom = reactive({
    title: '出场计划',
    isMore: true,
});
function handlerClickTop() {
    dialogStore.$patch({
        dialogInfor: {
            title: '车辆状况',
            isShow: true,
            path: [
                {
                    name: '进出场统计',
                    component: '/depotOperations/rightPageDiglog/top/statistics',
                },
                {
                    name: '维修记录',
                    component: '/depotOperations/rightPageDiglog/top/maintenance',
                },
                {
                    name: '洗车记录',
                    component: '/depotOperations/rightPageDiglog/top/carWash',
                },
            ],
        },
    });
}
function handlerClickBottom() {
    alert('点击了');
}
const btnList = [
    {
        name: '视频监控',
        value: 21,
        unit: '个',
        key: 0,
        iconUrl: '/src/assets/images/pageImages/monitor.png',
        iconSelectUrl: '/src/assets/images/pageImages/monitorSelet.png',
    },
    {
        name: '充电桩',
        value: 15,
        unit: '个',
        key: 1,
        iconUrl: '/src/assets/images/pageImages/charging.png',
        iconSelectUrl: '/src/assets/images/pageImages/chargingSelect.png',
    },
    {
        name: '泊位',
        value: 52,
        unit: '个',
        key: 2,
        iconUrl: '/src/assets/images/pageImages/berth.png',
        iconSelectUrl: '/src/assets/images/pageImages/berthSelect.png',
    },
];
let btnNum = ref(null);
function handlerClickBtn(value) {
    cameraData();
    btnNum.value = value.key;
}
let tableFromOption = reactive({
    isShowTable: true,
    tableObj: {
        tableData: [
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '延迟发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '延迟发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '延迟发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '延迟发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '延迟发车',
            },
            {
                berthCode: '粤B12342',
                bimCode: 'M206',
                berthType: '05:06',
                floor: '05:06',
                company: '05:06',
                berthState: '正常发车',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '车牌号',
                width: '100',
            },
            {
                prop: 'bimCode',
                label: '路线',
            },
            {
                prop: 'berthType',
                label: '计划发车',
            },
            {
                prop: 'floor',
                label: '计划离场',
            },
            {
                prop: 'company',
                label: '实际离场',
            },
            {
                prop: 'berthState',
                label: '发车状态',
                render: row => {
                    if (row.berthState == '正常发车') {
                        return <span style={{ color: '#1FFF93' }}>{row.berthState}</span>;
                    } else if (row.berthState == '延迟发车') {
                        return <span style={{ color: '#FF6000' }}>{row.berthState}</span>;
                    }
                },
            },
        ],
    },
});
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop" @handlerClick="handlerClickTop">
            <template #main>
                <div class="main_top">
                    <div class="img"></div>
                    <div class="text">
                        <div class="text_top">
                            <el-space :size="30">
                                <div class="text_main">
                                    <p>
                                        <span class="valueColor" style="color: #1fff93ff">212</span>
                                        <span class="unitColor">辆</span>
                                    </p>
                                    <p>进场</p>
                                </div>
                                <div class="text_main">
                                    <p>
                                        <span class="valueColor" style="color: #d8e550">118</span>
                                        <span class="unitColor">辆</span>
                                    </p>
                                    <p>离场</p>
                                </div>
                            </el-space>
                        </div>
                        <div class="text_bottom">
                            <el-space :size="35">
                                <div class="text_main">
                                    <p>
                                        <span class="valueColor" style="color: #eb3c34">13</span>
                                        <span class="unitColor">辆</span>
                                    </p>
                                    <p>维修</p>
                                </div>
                                <div class="text_main">
                                    <p>
                                        <span class="valueColor" style="color: #17dbef">25</span>
                                        <span class="unitColor">辆</span>
                                    </p>
                                    <p>洗车</p>
                                </div>
                                <div class="text_main">
                                    <p>
                                        <span class="valueColor" style="color: #1fff93">215</span>
                                        <span class="unitColor">辆</span>
                                    </p>
                                    <p>充电中</p>
                                </div>
                            </el-space>
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
                    <div class="main_bottom_top">
                        <p class="title">近10分钟内三个公交公司发车量：</p>
                        <div class="bottom">
                            <div class="text_main">
                                <p>
                                    <span class="valueColor">26</span>
                                    <span class="unitColor">辆</span>
                                </p>
                                <p>巴士集团</p>
                            </div>
                            <div class="text_main">
                                <p>
                                    <span class="valueColor">18</span>
                                    <span class="unitColor">辆</span>
                                </p>
                                <p>东部公交</p>
                            </div>
                            <div class="text_main">
                                <p>
                                    <span class="valueColor">17</span>
                                    <span class="unitColor">辆</span>
                                </p>
                                <p>西部公汽</p>
                            </div>
                        </div>
                    </div>
                    <div class="table">
                        <tableBox v-model:tableFromOption="tableFromOption" />
                    </div>
                </div>
            </template>
        </CardBox>
        <div class="leftBtnList">
            <div
                class="btnStyle"
                v-for="item in btnList"
                :key="item.key"
                :class="{ active: item.key == btnNum }"
                @click="handlerClickBtn(item)"
            >
                <div class="icon">
                    <img v-if="item.key == btnNum" :src="assetsImages(item.iconSelectUrl)" alt="" />
                    <img v-else :src="assetsImages(item.iconUrl)" alt="" />
                </div>
                <div class="text">
                    <p>{{ item.name }}</p>
                    <p>({{ item.value }}{{ item.unit }})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.page {
    height: 100%;
    width: 450px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

    .CardBox:nth-child(1) {
        height: calc(100% / 2 - 10px);
        margin-bottom: 20px;
    }
    .CardBox:nth-child(2) {
        flex-wrap: 1;
    }
    .main_top {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 15px;
        .img {
            width: 151px;
            height: 137px;
            background: url('@/assets/images/homeImages/depotOperations/bus.png') no-repeat;
            background-size: 100% 100%;
            margin-right: 24px;
        }
        .text {
            width: calc(100% - 175px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            .text_top {
                height: calc(100% / 2);
                width: 100%;
                position: relative;
                display: flex;
                align-items: flex-end;
                box-sizing: border-box;
                padding-bottom: 20px;
                .text_main {
                    font-weight: 500;
                    font-size: 14px;
                    text-align: left;
                    color: #ffffff;
                    .valueColor {
                        color: #1fff93ff;
                        font-weight: 900;
                        font-size: 24px;
                        text-align: left;
                    }
                    .unitColor {
                        font-weight: 500;
                        font-size: 12px;
                        text-align: left;
                    }
                }
                &::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    bottom: 0;
                    width: 148px;
                    height: 1px;
                    background-color: #106207;
                }
            }
            .text_bottom {
                height: calc(100% / 2);
                width: 100%;
                display: flex;
                align-items: flex-start;
                box-sizing: border-box;
                padding-top: 20px;
                .text_main {
                    font-weight: 500;
                    font-size: 14px;
                    text-align: left;
                    color: #ffffff;
                    .valueColor {
                        color: #1fff93ff;
                        font-weight: 900;
                        font-size: 24px;
                        text-align: left;
                    }
                    .unitColor {
                        font-weight: 500;
                        font-size: 12px;
                        text-align: left;
                    }
                }
            }
        }
    }
    .main_bottom {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 12px 0 0 0;
        .main_bottom_top {
            width: 410px;
            height: 100px;
            box-shadow: 0 0 25px 0 #032a3c inset;
            box-sizing: border-box;
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                font-weight: 500;
                font-size: 14px;
                text-align: center;
                color: #ffffff;
            }
            .bottom {
                width: 100%;
                display: flex;
                justify-content: space-around;
                .text_main {
                    font-weight: 500;
                    font-size: 14px;
                    text-align: center;
                    color: #ffffff;
                    .valueColor {
                        color: #1fff93ff;
                        font-weight: 900;
                        font-size: 24px;
                    }
                    .unitColor {
                        font-weight: 500;
                        font-size: 12px;
                    }
                }
            }
        }
        .table {
            box-sizing: border-box;
            width: 100%;
            flex-grow: 1;
            padding: 20px 16px 10px 16px;
        }
    }
    .leftBtnList {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        left: -150px;
        bottom: 0;
        .btnStyle {
            box-sizing: border-box;
            min-width: 130px;
            height: 50px;
            line-height: 50px;
            background: url('@/assets/images/pageImages/bottomFrame.png') no-repeat;
            background-size: 100% 100%;
            margin-bottom: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            padding: 0 18px 0 23px;
            .icon {
                margin-right: 13px;
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .text {
                color: #ffffff;
                font-weight: 500;
                font-size: 14px;
                text-align: left;
                line-height: 20px;
                letter-spacing: 0.5px;
            }
            &.active {
                background: url('@/assets/images/pageImages/bottomFrameSelet.png') no-repeat;
                background-size: 100% 100%;
                .text {
                    color: #00ff84;
                }
            }
        }
    }
}
</style>
