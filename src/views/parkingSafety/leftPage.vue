<script setup lang="jsx">
import { reactive, ref } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import floorList from '@/components/common/floorList.vue';
import tableBox from '@/components/common/table.vue';
import { optionsFold } from '@/utils/echartsJson.js';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
const cardPropsTop = reactive({
    title: '进出视频监控',
    isMore: false,
});
const cardPropsBottom = reactive({
    title: '车辆进出场统计',
    size: 'medium',
    isMore: false,
    isClick: true,
});
function handlerClick() {
    dialogStore.$patch({
        dialogInfor: {
            title: '过车管理',
            isShow: true,
            width: 1279,
            height: 685,
            path: '/parkingSafety/leftPageDiglog/vehiclePassing',
        },
    });
}
const topList = [
    {
        name: '出口相机1',
        key: 0,
    },
    {
        name: '出口相机2',
        key: 1,
    },
    {
        name: '备用出入口',
        key: 2,
    },
    {
        name: '入口',
        key: 3,
    },
];
const bottomList = [
    {
        name: '出场过车记录',
        key: 0,
    },
    {
        name: '进场过车记录',
        key: 1,
    },
];
let topValue = ref('');
function handlerClickTop(value) {
    topValue.value = value.name;
}
let bottomValue = ref('0');
function handlerClickBottom(value) {
    bottomValue.value = value.key;
}
function handlerClickTable(obj) {
    alert(JSON.stringify(obj));
}
let tableFromOption = reactive({
    isShowTable: true,
    tableObj: {
        tableData: [
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
            {
                berthCode: '巴士集团第五分公司',
                bimCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '所属单位',
            },
            {
                prop: 'bimCode',
                label: '车牌号',
            },
            {
                prop: 'berthType',
                label: '出场时间',
                width: 145,
            },
        ],
        operatesBtnObj: {
            title: '出场图片',
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => handlerClickTable(row)}
                            >
                                查看图片
                            </el-link>
                        );
                    },
                },
            ],
        },
    },
});
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop">
            <template #main>
                <div class="CardBox_top">
                    <div class="image"></div>
                    <div class="btnList">
                        <div
                            class="btnStyle"
                            :class="{ active: item.name == topValue }"
                            v-for="item in topList"
                            :key="item.key"
                            @click="handlerClickTop(item)"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom" @handlerClick="handlerClick">
            <template #topRight>过车管理</template>
            <template #main>
                <div class="CardBox_bottom">
                    <div class="CardBox_echarts">
                        <Echarts :options="optionsFold" />
                    </div>
                    <div class="CardBox_table">
                        <div class="table_top">
                            <div
                                class="table_top_btn"
                                :class="{ active: bottomValue == item.key }"
                                v-for="item in bottomList"
                                :key="item.key"
                                @click="handlerClickBottom(item)"
                            >
                                {{ item.name }}
                            </div>
                        </div>
                        <tableBox v-model:tableFromOption="tableFromOption" />
                    </div>
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
    .CardBox:nth-child(1) {
        height: calc(100% / 2 - 10px);
        margin-bottom: 20px;
    }
    .CardBox:nth-child(2) {
        flex-grow: 1;
    }
    .CardBox_top {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        .image {
            width: 114px;
            height: 114px;
            background: url('@/assets/images/homeImages/parkingSafety/monitorImg.png') no-repeat;
            background-size: 100% 100%;
        }
        .btnList {
            height: 100%;
            width: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .btnStyle {
                height: 40px;
                width: 100%;
                line-height: 40px;
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                color: #ffffff;
                background: url('@/assets/images/homeImages/parkingSafety/monitorNormal.png')
                    no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
                &.active {
                    background: url('@/assets/images/homeImages/parkingSafety/monitorSelect.png')
                        no-repeat;
                    color: #28dd86;
                }
            }
        }
        .line {
            position: absolute;
            border-top: 1px dashed #168abb;
        }
        .line:nth-child(3) {
            width: 92px;
            left: 168px;
            top: 44%;
            transform: rotate(162deg);
        }

        .line:nth-child(4) {
            width: 116px;
            left: 156px;
            top: 32%;
            transform: rotate(138deg);
        }
        .line:nth-child(5) {
            width: 116px;
            left: 156px;
            top: 68%;
            transform: rotate(-138deg);
        }
        .line:nth-child(6) {
            width: 92px;
            left: 168px;
            top: 56%;
            transform: rotate(-162deg);
        }
    }
    .CardBox_bottom {
        height: 100%;
        width: 100%;
        .CardBox_echarts {
            height: 40%;
            width: 100%;
        }
        .CardBox_table {
            box-sizing: border-box;
            height: 50%;
            width: 100%;
            padding: 0px 16px 10px 16px;
            .table_top {
                height: 40px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                .table_top_btn {
                    min-width: 140px;
                    height: 100%;
                    background: url('@/assets/images/homeImages/parkingSafety/btnStyle.png')
                        no-repeat;
                    background-size: 100% 100%;
                    font-weight: 700;
                    font-size: 18px;
                    text-align: center;
                    color: #ffffff;
                    line-height: 40px;
                    cursor: pointer;
                    &.active {
                        background: url('@/assets/images/homeImages/parkingSafety/btnSelectStyle.png')
                            no-repeat;
                        color: #00f67f;
                    }
                }
            }
        }
    }
}
</style>
