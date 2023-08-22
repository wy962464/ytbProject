<!-- 资产BIM -->
<script setup>
import floorList from '@/components/common/floorList.vue';
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

let floorName = ref('--');
const specific = ref(null);
const specificName = ref('2017');
let timer = ref(null);
let number = ref(0);
let data = reactive([
    {
        id: 1,
        label: '低压供配电系统',
        children: [
            {
                id: 2,
                label: '动力照明配电箱',
                children: [
                    {
                        id: 3,
                        label: '动力配电箱',
                    },
                    {
                        id: 4,
                        label: '室内暗装照明配电箱',
                    },
                    {
                        id: 5,
                        label: '照明配电箱',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        label: '弱点系统',
        children: [
            {
                id: 7,
                label: '9F集调中心大屏幕系统',
            },
            {
                id: 8,
                label: '巡更系统',
            },
            {
                id: 9,
                label: '有线电视',
            },
            {
                id: 10,
                label: '楼宇设备自控',
            },
            {
                id: 11,
                label: '消防安保控制室大屏幕',
            },
        ],
    },
]);
const schedule = ref([
    {
        type: 'year',
        name: '2017',
    },
    {
        type: 'month',
        name: '1月',
        content: '主体结构：项目开工',
        details: '软件开发：项目立项,需求调研BIM建模：BIM结构、建筑、给排水专业开始建模',
    },
    {
        type: 'year',
        name: '2018',
    },
    {
        type: 'month',
        name: '四月',
        content: '主体结构：项目开工',
        details: '软件开发：项目立项,需求调研BIM建模：BIM结构、建筑、给排水专业开始建模',
    },
    {
        type: 'month',
        name: '五月',
        content: '主体结构：项目开工',
        details: 'BIM建模：BIM暖通、机电专业建模',
    },
    {
        type: 'month',
        name: '六月',
        content: '主体结构：项目开工',
        details: '软件开发：项目立项,需求调研BIM建模：BIM结构、建筑、给排水专业开始建模',
    },
    {
        type: 'month',
        name: '七月',
        content: '主体结构：项目开工',
        details: 'BIM建模：BIM暖通、机电专业建模',
    },
]);
const handlerClickTree = obj => {
    floorName.value = obj.floorName;
};
const handleCurrentChange = (data, node) => {
    if (!data.children) {
        console.log(data, node);
    }
};
onMounted(() => {
    trajectory();
});
const trajectory = () => {
    timer.value = setInterval(() => {
        specificName.value = '';
        if (number.value >= schedule.value.length - 1) {
            number.value = 0;
        } else {
            number.value++;
        }
        specific.value.style.left = `calc(50% - ${number.value * 190}px)`;
    }, 3000);
};
const handlerClickSpecific = (item, index) => {
    clearTrajectory();
    number.value = index;
    specificName.value = item.name;
    specific.value.style.left = `calc(50% - ${index * 190}px)`;
};
const clearTrajectory = () => {
    clearInterval(timer.value);
};
onBeforeUnmount(() => {
    clearTrajectory();
});
</script>

<template>
    <div class="assetMeansBIM">
        <div class="assetMeansBIMTree">
            <detailsInforStyle>
                <template #name>
                    当前楼层
                    <span class="floorName">{{ floorName }}</span>
                </template>
                <template #main>
                    <el-scrollbar>
                        <el-tree
                            ref="treeRef"
                            :data="data"
                            default-expand-all
                            icon="ArrowRightBold"
                            node-key="id"
                            :current-node-key="2"
                            @current-change="handleCurrentChange"
                        >
                            <template v-slot="{ node, data }">
                                <span
                                    class="ellipsis"
                                    v-text="node.label"
                                    :title="node.label"
                                ></span>
                            </template>
                        </el-tree>
                    </el-scrollbar>
                </template>
            </detailsInforStyle>
        </div>
        <floorList style="z-index: 1" top="20" @handlerClickTree="handlerClickTree" />
        <div class="dateProcess" @mouseenter="clearTrajectory()" @mouseleave="trajectory()">
            <div class="specific">
                <ul ref="specific">
                    <template v-for="(item, index) in schedule" :key="item.name">
                        <li v-if="item.type == 'year'" @click="handlerClickSpecific(item, index)">
                            <div
                                class="yearIcon"
                                :class="{
                                    active: item.name == specificName || index == number,
                                }"
                            ></div>
                            <div
                                class="yearContent"
                                v-if="item.name == specificName || index == number"
                            >
                                {{ item.name }}年
                            </div>
                            <div v-else class="yearName">
                                {{ item.name }}
                            </div>
                        </li>
                        <li v-if="item.type == 'month'" @click="handlerClickSpecific(item, index)">
                            <div
                                class="monthIcon"
                                :class="{
                                    active: item.name == specificName || index == number,
                                }"
                            >
                                <div class="monthName">{{ item.name }}</div>
                            </div>
                            <div
                                class="monthContent"
                                v-if="item.name == specificName || index == number"
                            >
                                <div class="monthContentFrame">{{ item.content }}</div>
                            </div>
                            <div v-else class="monthContents">{{ item.details }}</div>
                        </li>
                    </template>
                </ul>
                <div class="schedule"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.assetMeansBIM {
    width: 100%;
    height: 100%;
    .dateProcess {
        height: 260px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        background: #00000075;
        display: flex;
        align-items: center;
        animation: swipe 0.5s linear;
        @keyframes swipe {
            from {
                bottom: -290px;
            }
            to {
                bottom: 0px;
            }
        }
        .specific {
            position: relative;
            height: 100%;
            width: 100%;
            ul {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 50%;
                transform: translate(-50px, 0);
                display: flex;
                z-index: 2;
                transition: all 0.5s linear;
                li {
                    width: 190px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    cursor: pointer;
                    .yearIcon {
                        width: 18px;
                        height: 18px;
                        background: url('@/assets/images/homeImages/assetManagement/normalYear.png')
                            no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                        transition: all 0.5s linear;
                        &.active {
                            background: url('@/assets/images/homeImages/assetManagement/selectYear.png')
                                no-repeat;
                        }
                    }
                    .yearName {
                        position: absolute;
                        top: 50%;
                        transform: translate(0, calc(-50% + 20px));
                        font-weight: 500;
                        font-size: 18px;
                        text-align: left;
                        color: #ffffff;
                    }
                    .yearContent {
                        position: absolute;
                        top: 50%;
                        transform: translate(0, calc(-50% - 50px));
                        width: 182px;
                        height: 82px;
                        background: url('@/assets/images/homeImages/assetManagement/yearFrame.png')
                            no-repeat;
                        background-size: 100% 100%;
                        font-weight: 700;
                        font-size: 30px;
                        color: #26dc85;
                        text-align: center;
                        line-height: 63px;
                    }
                    .monthContent {
                        position: absolute;
                        top: 50%;
                        transform: translate(0, calc(-50% - 72px));
                        width: 25px;
                        height: 92px;
                        background: url('@/assets/images/homeImages/assetManagement/monthFrame.png')
                            no-repeat;
                        background-size: 100% 100%;
                        font-weight: 700;
                        font-size: 30px;
                        color: #26dc85;
                        text-align: center;
                        line-height: 63px;
                        .monthContentFrame {
                            position: relative;
                            left: 30px;
                            min-width: 260px;
                            height: 41px;
                            background: url('@/assets/images/homeImages/assetManagement/monthContentFrame.png')
                                no-repeat;
                            background-size: 100% 100%;
                            font-weight: 500;
                            font-size: 16px;
                            text-align: left;
                            color: #00ff84;
                            line-height: 41px;
                            text-indent: 20px;
                        }
                    }
                    .monthContents {
                        position: absolute;
                        top: 50%;
                        transform: translate(0, calc(-50% + 80px));
                        min-height: 100px;
                        color: #ffffff;
                        font-weight: 500;
                        font-size: 14px;
                        text-align: left;
                        box-sizing: border-box;
                        padding: 0 10px 0 10px;
                    }
                    .monthIcon {
                        width: 50px;
                        height: 50px;
                        background: url('@/assets/images/homeImages/assetManagement/normalMonth.png')
                            no-repeat;
                        background-size: 100% 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.5s linear;
                        &.active {
                            background: url('@/assets/images/homeImages/assetManagement/selectMonth.png')
                                no-repeat;
                        }
                        .monthName {
                            font-weight: 700;
                            font-size: 18px;
                            color: #ffffff;
                        }
                    }
                }
            }
            .schedule {
                position: absolute;
                height: 5px;
                width: 100%;
                background: #cccccc;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 1;
            }
        }
    }
    .assetMeansBIMTree {
        position: absolute;
        width: 330px;
        height: calc(100% - 20px);
        top: 20px;
        right: 30px;
        background: #020d16d3;
        z-index: 1;
        .floorName {
            font-weight: 500;
            font-size: 20px;
            text-align: left;
            color: #00ff84;
            margin-left: 10px;
        }
        .el-tree {
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0);
            flex-grow: 1;
            --el-tree-node-hover-bg-color: linear-gradient(
                to right,
                rgba(31, 255, 147, 0),
                rgba(31, 255, 147, 0.5)
            );
        }
    }
}
</style>
