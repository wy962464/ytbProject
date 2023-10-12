<script setup lang="jsx">
import { reactive, ref } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
const cardPropsTop = reactive({
    title: '重点区域',
    isClick: true,
});
const cardPropsCenter = reactive({
    title: '应急预案报警管理',
    isClick: true,
});
const cardPropsBottom = reactive({
    title: '消防巡检',
    isMore: true,
});
let selectInput = ref('');
let tableFromOption = reactive({
    isShowTable: true,
    tableObj: {
        tableData: [
            {
                berthCode: '1层',
                bimCode: 'L1-上坡道左…',
            },
            {
                berthCode: '1层',
                bimCode: 'L1-上坡道左…',
            },
            {
                berthCode: '1层',
                bimCode: 'L1-上坡道左…',
            },
            {
                berthCode: '1层',
                bimCode: 'L1-上坡道左…',
            },
            {
                berthCode: '1层',
                bimCode: 'L1-上坡道左…',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '所属楼层',
            },
            {
                prop: 'bimCode',
                label: '摄像机名称',
            },
        ],
        operatesBtnObj: {
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={() => alert(JSON.stringify(row))}
                            >
                                删除
                            </el-link>
                        );
                    },
                    hasPermi: ['del'],
                },
            ],
        },
        headerRowStyle: {
            background: 'rgba(3, 24, 38, 0.9)',
        },
    },
});
const emergencyList = [
    {
        name: '应急预案',
        until: '项',
        value: '6',
    },
    {
        name: '应急事件',
        until: '项',
        value: '7',
    },
    {
        name: '安全风险源',
        until: '项',
        value: '1',
    },
];
function handlerClickTop() {
    dialogStore.$patch({
        dialogInfor: {
            title: '视频监控',
            isShow: true,
            width: 1279,
            height: 685,
            path: '/parkingSafety/rightPageDiglog/keyAreasContent/videoMonitoring',
        },
    });
}
function handlerClickCenter() {
    dialogStore.$patch({
        dialogInfor: {
            title: '报警管理',
            isShow: true,
            width: 1279,
            height: 685,
            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/alarmManage',
        },
    });
}
function handlerClickBottom() {
    dialogStore.$patch({
        dialogInfor: {
            title: '消防巡检',
            isShow: true,
            width: 1279,
            height: 685,
            path: [
                {
                    name: '灭火器巡检',
                    component:
                        '/parkingSafety/rightPageDiglog/firePatrolInspection/fireExtinguisher',
                },
                {
                    name: '消防栓巡检',
                    component: '/parkingSafety/rightPageDiglog/firePatrolInspection/fireHydrant',
                },
            ],
        },
    });
}
function handlerClickEmergency(key) {
    dialogStore.$patch({
        dialogInfor: {
            title: '应急预案',
            isShow: true,
            tabSeletNum: key,
            width: 1279,
            height: 685,
            path: [
                {
                    name: '应急预案',
                    component: '/parkingSafety/rightPageDiglog/emergencyPlanContent/emergencyPlan',
                },
                {
                    name: '应急事件',
                    component:
                        '/parkingSafety/rightPageDiglog/emergencyEventsContent/emergencyEvents',
                },
                {
                    name: '安全风险源',
                    component: '/parkingSafety/rightPageDiglog/securityRiskContent/securityRisk',
                },
            ],
        },
    });
}
function handlerClickAdd() {
    dialogStore.$patch({
        dialogInfor: {
            title: '绑定区域',
            isShow: true,
            width: 839,
            height: 615,
            path: '/parkingSafety/rightPageDiglog/keyAreasContent/bindingArea',
        },
    });
}
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop" @handlerClick="handlerClickTop">
            <template #topRight>视频监控</template>
            <template #main>
                <div class="CardBox_top">
                    <div class="inputerBtn">
                        <el-select
                            v-model="selectInput"
                            placeholder="请选择监控通道"
                            popper-class="selectPopperClass"
                        >
                            <el-option label="一层通道监控" value="1" />
                            <el-option label="二层通道监控" value="2" />
                            <el-option label="三层通道监控" value="3" />
                            <el-option label="四层通道监控" value="4" />
                        </el-select>
                        <div class="btn" @click="handlerClickAdd">添加</div>
                    </div>
                    <div class="table">
                        <tableBox v-model:tableFromOption="tableFromOption" />
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsCenter"
            @handlerClick="handlerClickCenter"
        >
            <template #topRight>报警管理</template>
            <template #main>
                <div class="CardBox_center">
                    <div class="CardBox_center_bg">
                        <div class="CardBox_center_main">
                            <div
                                class="CardBox_center_text"
                                v-for="(item, index) in emergencyList"
                                :key="index"
                                @click="handlerClickEmergency(index)"
                            >
                                <p>
                                    {{ item.value }}
                                    <span class="until">({{ item.until }})</span>
                                </p>
                                <p>{{ item.name }}</p>
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
                <div class="CardBox_bottom">
                    <div class="top">
                        <div class="top_text">
                            <div class="name">灭火器</div>
                            <div class="status">
                                <p>
                                    正常
                                    <span>4100</span>
                                    <span>个</span>
                                </p>
                                <p>
                                    异常
                                    <span>0</span>
                                    <span>个</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom_text">
                            <div class="name">消防栓</div>
                            <div class="status">
                                <p>
                                    正常
                                    <span>1610</span>
                                    <span>个</span>
                                </p>
                                <p>
                                    异常
                                    <span>2</span>
                                    <span>个</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </CardBox>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';

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
    .CardBox_top {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        padding-top: 10px;

        .inputerBtn {
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            :deep(.el-input__wrapper) {
                width: 300px;
                height: 26px;
                background-color: rgba(13, 21, 30, 0);
                border-radius: 0px;
                box-shadow: 0 0 0 0;
                border: 1px solid #275252;

                .el-input__inner {
                    height: 18px;
                    font-weight: 500;
                    font-size: 12px;
                    text-align: left;
                    color: #cccccc;
                }

                .el-input__inner::placeholder {
                    font-weight: 500;
                    font-size: 14px;
                    text-align: left;
                    color: #cccccc;
                }
                &:hover {
                    box-shadow: 0 0 0 0 !important;
                    border: 1px solid #275252;
                }
            }
            :deep(.el-select .el-input.is-focus .el-input__wrapper) {
                box-shadow: 0 0 0 0 !important;
                border: 1px solid #275252;
            }

            :deep(.el-select .el-input__wrapper.is-focus) {
                box-shadow: 0 0 0 0 !important;
                border: 1px solid #275252;
            }
            .btn {
                color: #ffffff;
                width: 80px;
                height: 28px;
                border: 1px solid #275252;
                font-weight: 500;
                font-size: 14px;
                text-align: center;
                line-height: 28px;
                border: 1px solid #275252;
                cursor: pointer;
                &:hover {
                    color: #00ff84;
                    border: 1px solid #00ff84;
                }
            }
        }
        .table {
            height: calc(100% - 50px);
            padding: 0px 16px 10px 16px;
        }
    }
    .CardBox_center {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        padding-top: 50px;
        .CardBox_center_bg {
            width: 410px;
            height: 87px;
            background: url('@/assets/images/homeImages/parkingSafety/emergency.png') no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            padding-left: 94px;
            position: relative;
            .CardBox_center_main {
                width: calc(100% - 94px);
                position: absolute;
                bottom: -1px;
                left: 94px;
                display: flex;
                justify-content: space-around;
                .CardBox_center_text {
                    cursor: pointer;
                    p:nth-child(1) {
                        color: #ffffffff;
                        font-weight: 900;
                        font-size: 30px;
                        line-height: 20px;
                        .until {
                            color: #acacacff;
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
                    p:nth-child(2) {
                        font-weight: 500;
                        font-size: 16px;
                        color: #23fffc;
                        &::after {
                            content: '';
                            display: inline-block;
                            margin-left: 3px;
                            width: 10px;
                            height: 10px;
                            background: url('@/assets/images/homeImages/parkingSafety/arrow.png')
                                no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
    }
    .CardBox_bottom {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .top {
            width: 410px;
            height: 78px;
            background: url('@/assets/images/homeImages/parkingSafety/extinguisher.png') no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            padding-left: 130px;
            position: relative;
            .top_text {
                width: calc(100% - 130px);
                position: absolute;
                left: 130px;
                bottom: 0;

                .name {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: left;
                    color: #ffffff;
                    line-height: 30px;
                }
                .status {
                    font-weight: 500;
                    font-size: 16px;
                    text-align: left;
                    line-height: 50px;
                    color: #ffffff;
                    display: flex;
                    p:nth-child(1) {
                        margin-right: 23px;
                        span:nth-child(1) {
                            color: #23fffcff;
                            font-weight: 900;
                            font-size: 28px;
                            text-align: left;
                        }
                        span:nth-child(2) {
                            color: #ffffffff;
                            font-weight: 500;
                            font-size: 14px;
                            text-align: left;
                        }
                    }
                    p:nth-child(2) {
                        span:nth-child(1) {
                            color: #eb3c34;
                            font-weight: 900;
                            font-size: 28px;
                            text-align: left;
                        }
                        span:nth-child(2) {
                            color: #ffffffff;
                            font-weight: 500;
                            font-size: 14px;
                            text-align: left;
                        }
                    }
                }
            }
        }
        .bottom {
            width: 410px;
            height: 78px;
            background: url('@/assets/images/homeImages/parkingSafety/fireHydrant.png') no-repeat;
            background-size: 100% 100%;
            position: relative;
            box-sizing: border-box;
            padding-left: 130px;
            .bottom_text {
                width: calc(100% - 130px);
                position: absolute;
                left: 130px;
                bottom: 0;

                .name {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: left;
                    color: #ffffff;
                    line-height: 30px;
                }
                .status {
                    font-weight: 500;
                    font-size: 16px;
                    text-align: left;
                    line-height: 50px;
                    color: #ffffff;
                    display: flex;
                    p:nth-child(1) {
                        margin-right: 23px;
                        span:nth-child(1) {
                            color: #23fffcff;
                            font-weight: 900;
                            font-size: 28px;
                            text-align: left;
                        }
                        span:nth-child(2) {
                            color: #ffffffff;
                            font-weight: 500;
                            font-size: 14px;
                            text-align: left;
                        }
                    }
                    p:nth-child(2) {
                        span:nth-child(1) {
                            color: #eb3c34;
                            font-weight: 900;
                            font-size: 28px;
                            text-align: left;
                        }
                        span:nth-child(2) {
                            color: #ffffffff;
                            font-weight: 500;
                            font-size: 14px;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
}
</style>
