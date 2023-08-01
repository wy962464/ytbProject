<script setup>
import { reactive, ref } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import { assetVisualization } from '@/utils/echartsJson.js';

const cardProps = reactive({
    title: '资产可视化',
});
const tableTopList = [
    {
        name: '按类型',
        key: 0,
    },
    {
        name: '按楼层',
        key: 1,
    },
];
let tableTopValue = ref('0');
function handlerClickBtn(value) {
    tableTopValue.value = value.key;
}
let tableList = reactive([
    [
        {
            name: '厕所',
            value: 387.19,
        },
        {
            name: '充电办公室',
            value: 149.62,
        },
        {
            name: '厨房区',
            value: 350.74,
        },
        {
            name: '更衣区',
            value: 88.43,
        },
    ],
    [
        {
            name: '运营线路办公室',
            value: 570.19,
        },
        {
            name: '调度用房',
            value: 55.56,
        },
        {
            name: '办公或值班',
            value: 198.96,
        },
        {
            name: '机务室',
            value: 365.98,
        },
    ],
    [
        {
            name: '食堂',
            value: 757.6,
        },
        {
            name: '培训室兼大会议室',
            value: 303.52,
        },
        {
            name: '办公室',
            value: 149.73,
        },
        {
            name: '管理单位办公室',
            value: 88.43,
        },
    ],
]);
</script>

<template>
    <div class="page">
        <CardBox v-model:cardProps="cardProps">
            <template #main>
                <div class="assetManagement">
                    <div class="top">
                        <div class="left">
                            <div class="lable">
                                <div class="text">
                                    <p>
                                        <el-statistic
                                            :value-style="{
                                                color: '#FFFFFF',
                                                fontweight: 900,
                                                fontSize: '24px',
                                                textAlign: 'left',
                                            }"
                                            :precision="2"
                                            :value="98499.69"
                                        ></el-statistic>
                                    </p>
                                    <p>
                                        总面积
                                        <span>(平方米)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="lable">
                                <div class="text">
                                    <p>
                                        <el-statistic
                                            :value-style="{
                                                color: '#FFFFFF',
                                                fontweight: 900,
                                                fontSize: '24px',
                                                textAlign: 'left',
                                            }"
                                            :precision="2"
                                            :value="6758.96"
                                        ></el-statistic>
                                    </p>
                                    <p>
                                        场务用房面积
                                        <span>(平方米)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table_top">
                        <div
                            class="table_top_btn"
                            :class="{ active: tableTopValue == item.key }"
                            v-for="item in tableTopList"
                            :key="item.key"
                            @click="handlerClickBtn(item)"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                    <Echarts class="Echarts" height="300px" :options="assetVisualization" />
                    <div class="tableStyle">
                        <el-scrollbar>
                            <template v-for="item in tableList">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>m²</th>
                                            <th style="width: 150px" v-for="items in item">
                                                {{ items.name }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>所占面积</td>
                                            <td v-for="items in item">{{ items.value }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </template>
                        </el-scrollbar>
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
    .assetManagement {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .top {
            height: 77px;
            width: 100%;
            margin-top: 30px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-around;
            .left {
                height: 100%;
                display: flex;
                align-items: center;
                .lable {
                    width: 205px;
                    height: 100%;
                    position: relative;
                    background: url('@/assets/images/homeImages/assetManagement/parkingLot.png')
                        no-repeat;
                    background-size: 100% 100%;
                    .text {
                        position: absolute;
                        left: 81px;
                        top: 50%;
                        transform: translate(0, -65%);
                        p {
                            color: rgb(255, 255, 255);
                            font-weight: 500;
                            font-size: 16px;
                            text-align: left;
                            span {
                                color: #acacac;
                                font-weight: 500;
                                font-size: 14px;
                                text-align: left;
                            }
                        }
                    }
                }
            }
            .right {
                height: 100%;
                display: flex;
                align-items: center;
                .lable {
                    width: 221px;
                    height: 100%;
                    position: relative;
                    background: url('@/assets/images/homeImages/assetManagement/fieldAffairs.png')
                        no-repeat;
                    background-size: 100% 100%;
                    .text {
                        position: absolute;
                        left: 56px;
                        top: 50%;
                        transform: translate(0, -65%);
                        p {
                            color: rgb(255, 255, 255);
                            font-weight: 500;
                            font-size: 16px;
                            text-align: left;
                            span {
                                color: #acacac;
                                font-weight: 500;
                                font-size: 14px;
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
        .table_top {
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            .table_top_btn {
                min-width: 90px;
                background: url('@/assets/images/homeImages/parkingSafety/btnStyle.png') no-repeat;
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
        .Echarts {
            margin-bottom: 50px;
        }
        .tableStyle {
            width: 100%;
            height: 0;
            flex-grow: 1;
            box-sizing: border-box;
            padding: 0 15px 10px 15px;
            table {
                width: 100%;
                thead {
                    height: 30px;
                    background: rgba(3, 24, 38, 0.78);
                    th {
                        font-weight: 400;
                        font-size: 12px;
                        text-align: center;
                        color: #00ff84;
                    }
                }
                tbody {
                    height: 49px;
                    font-weight: 400;
                    font-size: 12px;
                    text-align: center;
                    color: #ffffff;
                    tr {
                        td:nth-child(1) {
                            width: 50px;
                        }
                    }
                }
            }
        }
    }
}
</style>
