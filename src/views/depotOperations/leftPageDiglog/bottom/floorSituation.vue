<!-- 各楼层情况 -->
<script setup>
const dataList = {
    today: 268500,
    leiji: 7298192897,
    floorInforList: [
        {
            floor: '7楼',
            color: '#3490FF',
            charging: 25,
            occupy: 63,
            idle: 215,
            offline: 0,
            fault: 0,
        },
        {
            floor: '6楼',
            color: '#FD6B00',
            charging: 12,
            occupy: 18,
            idle: 21,
            offline: 0,
            fault: 2,
        },
        {
            floor: '5楼',
            color: '#E5D807',
            charging: 23,
            occupy: 27,
            idle: 23,
            offline: 0,
            fault: 2,
        },
        {
            floor: '4楼',
            color: '#15EB29',
            charging: 56,
            occupy: 61,
            idle: 29,
            offline: 0,
            fault: 3,
        },
        {
            floor: '3楼',
            color: '#1BE0D9',
            charging: 21,
            occupy: 18,
            idle: 15,
            offline: 0,
            fault: 0,
        },
        {
            floor: '2楼',
            color: '#DD52E2',
            charging: 19,
            occupy: 56,
            idle: 123,
            offline: 0,
            fault: 1,
        },
        {
            floor: '1楼',
            color: '#24FF96',
            charging: 9,
            occupy: 45,
            idle: 75,
            offline: 0,
            fault: 1,
        },
    ],
};
</script>

<template>
    <div class="floorSituation">
        <div class="top">
            <el-space :size="30">
                <el-statistic
                    :value-style="{
                        color: '#24FF96',
                        fontweight: 500,
                        fontSize: '30px',
                        textAlign: 'left',
                    }"
                    :value="dataList.today"
                >
                    <template #prefix><span class="text">今日充电总量</span></template>
                </el-statistic>
                <el-statistic
                    :value-style="{
                        color: '#24FF96',
                        fontweight: 500,
                        fontSize: '30px',
                        textAlign: 'left',
                    }"
                    :value="dataList.leiji"
                >
                    <template #prefix><span class="text">累计充电总量</span></template>
                </el-statistic>
            </el-space>
        </div>
        <div class="bottom">
            <div class="floorInfor" v-for="item in dataList.floorInforList" :key="item.color">
                <div class="title" :style="{ color: item.color }">
                    {{ item.floor }}
                    <div class="subscript" :style="{ backgroundColor: item.color }"></div>
                    <div class="subscript" :style="{ backgroundColor: item.color }"></div>
                </div>
                <div class="main">
                    <div class="main_details">
                        <el-space :size="10">
                            <span class="name">充电中</span>
                            <span class="value">{{ item.charging }}</span>
                        </el-space>
                    </div>
                    <div class="main_details">
                        <el-space :size="10">
                            <span class="name">占用(未充)</span>
                            <span class="value">{{ item.occupy }}</span>
                        </el-space>
                    </div>
                    <div class="main_details">
                        <el-space :size="10">
                            <span class="name">空闲</span>
                            <span class="value">{{ item.idle }}</span>
                        </el-space>
                    </div>
                    <div class="main_details">
                        <el-space :size="10">
                            <span class="name">离线</span>
                            <span class="value">{{ item.offline }}</span>
                        </el-space>
                    </div>
                    <div class="main_details">
                        <el-space :size="10">
                            <span class="name">故障</span>
                            <span class="value">{{ item.fault }}</span>
                        </el-space>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.floorSituation {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 17px;
    display: flex;
    flex-direction: column;
    .top {
        display: flex;
        justify-content: center;
        .text {
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
        }
    }
    .bottom {
        width: 100%;
        height: 0;
        flex-grow: 1;
        box-sizing: border-box;
        padding-top: 12px;
        .floorInfor {
            width: 100%;
            box-sizing: border-box;
            height: 46px;
            background-color: #023240;
            border: 1px solid #000000;
            margin-bottom: 12px;
            display: flex;
            justify-content: flex-start;
            .title {
                width: 88px;
                height: 100%;
                position: relative;
                font-weight: 500;
                font-size: 16px;
                text-align: center;
                line-height: 46px;
                .subscript {
                    position: absolute;
                    width: 10px;
                    height: 3px;
                    bottom: 1px;
                }
                .subscript:nth-child(1) {
                    left: 0;
                }
                .subscript:nth-child(2) {
                    right: 0;
                }
            }
            .main {
                width: calc(100% - 88px);
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .main_details {
                    width: 155px;
                    height: 100%;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &::after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                        display: block;
                        width: 1px;
                        height: 9px;
                        background-color: #555555;
                    }
                    .name {
                        font-weight: 500;
                        font-size: 14px;
                        text-align: center;
                        color: #ffffff;
                    }
                    .value {
                        font-weight: 500;
                        font-size: 18px;
                        text-align: center;
                        color: #ffffff;
                    }
                }
                .main_details:last-child {
                    &::after {
                        content: '';
                        display: block;
                        width: 0px;
                        height: 0px;
                    }
                }
            }
        }
    }
}
</style>
