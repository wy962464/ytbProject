<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import { getImageUrl } from '@/utils';
import { DialogStore } from '@/store/modules/dialog.js';
import Echarts from '@/components/common/Echarts.vue';
import { assetRepair } from '@/utils/echartsJson.js';
import { useRouter } from 'vue-router';

const dialogStore = DialogStore();
const router = useRouter();
const cardPropsTop = reactive({
    title: '资产管理',
});
const cardPropsCenter = reactive({
    title: '资产维修',
    isMore: true,
});
const cardPropsBottom = reactive({
    title: '资产BIM构件库',
});
const handlerClickInventory = () => {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产清单管理',
            isShow: true,
            width: 1279,
            height: 685,
            path: '/assetManagement/rightPageDiglog/inventoryManagement',
        },
    });
};
const handlerClickSpace = () => {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产清单管理',
            isShow: true,
            width: 1279,
            height: 685,
            path: [
                {
                    name: '空间管理',
                    component: '/assetManagement/rightPageDiglog/spaceManagement',
                },
                {
                    name: '资产搬迁',
                    component: '/assetManagement/rightPageDiglog/assetRelocation',
                },
            ],
        },
    });
};
function handlerClickRepair() {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产维修',
            isShow: true,
            width: 1279,
            height: 685,
            path: [
                {
                    name: '维修清单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairList',
                },
                {
                    name: '待派单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/waitingList',
                    value: '0',
                },
                {
                    name: '待接单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/pendingOrders',
                    value: '1',
                },
                {
                    name: '维修中',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/underRepair',
                    value: '4',
                },
                {
                    name: '维修完成',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairCompleted',
                    value: '7',
                },
            ],
        },
    });
}
const assetRepairData = [
    {
        percentage: 0.2,
        name: '待派单',
        value: 18,
        color: '228, 83, 83',
    },
    {
        percentage: 0.3,
        name: '派单中',
        value: 50,
        color: '255, 204, 95',
    },
    {
        percentage: 0.4,
        name: '维修中',
        value: 60,
        color: '0, 252, 255',
    },
    {
        percentage: 0.5,
        name: '已完成',
        value: 70,
        color: '0, 255, 132',
    },
];
const handlerAssetRepair = index => {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产维修',
            isShow: true,
            tabSeletNum: index + 1,
            width: 1279,
            height: 685,
            path: [
                {
                    name: '维修清单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairList',
                },
                {
                    name: '待派单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/waitingList',
                    value: '0',
                },
                {
                    name: '待接单',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/pendingOrders',
                    value: '1',
                },
                {
                    name: '维修中',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/underRepair',
                    value: '4',
                },
                {
                    name: '维修完成',
                    component: '/assetManagement/rightPageDiglog/assetRepairDiglog/repairCompleted',
                    value: '7',
                },
            ],
        },
    });
};
const handlerClickMeansBIM = () => {
    router.replace('/assetMeansBIM');
};
const handlerClickMember = () => {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产构件库',
            isShow: true,
            width: 1300,
            height: 685,
            path: '/assetManagement/rightPageDiglog/memberProperty',
        },
    });
};
</script>

<template>
    <div class="page">
        <CardBox class="CardBox" v-model:cardProps="cardPropsTop">
            <template #main>
                <div class="assetManagement">
                    <div class="left">
                        <div class="top" @click="handlerClickInventory">
                            <p>资产清单管理</p>
                            <div class="images"></div>
                        </div>
                        <img
                            :src="getImageUrl('homeImages/assetManagement/inventory.png')"
                            alt=""
                        />
                    </div>
                    <div class="right">
                        <div class="top" @click="handlerClickSpace">
                            <p>资产空间管理</p>
                            <div class="images"></div>
                        </div>
                        <img :src="getImageUrl('homeImages/assetManagement/space.png')" alt="" />
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox
            class="CardBox"
            v-model:cardProps="cardPropsCenter"
            @handlerClick="handlerClickRepair"
        >
            <template #main>
                <div class="assetRepair">
                    <div
                        class="assetRepair_item"
                        v-for="(item, index) in assetRepairData"
                        :key="item.name"
                    >
                        <div class="left">
                            <Echarts :options="assetRepair(item.percentage, item.color)" />
                        </div>
                        <div class="right" @click="handlerAssetRepair(index)">
                            <div class="lable">
                                <span>{{ item.name }}</span>
                            </div>
                            <div class="value">{{ item.value }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom">
            <template #main>
                <div class="meansBIM">
                    <div class="left">
                        <div class="top" @click="handlerClickMeansBIM">
                            <p>资产BIM</p>
                            <div class="images"></div>
                        </div>
                        <img :src="getImageUrl('homeImages/assetManagement/meansBIM.png')" alt="" />
                    </div>
                    <div class="right">
                        <div class="top" @click="handlerClickMember">
                            <p>资产构件库</p>
                            <div class="images"></div>
                        </div>
                        <img :src="getImageUrl('homeImages/assetManagement/member.png')" alt="" />
                    </div>
                </div>
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
    .assetManagement {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .left {
            width: 141px;
            .top {
                width: 141px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                p {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: right;
                    color: #23fffc;
                    line-height: 50px;
                }
                .images {
                    width: 10px;
                    height: 10px;
                    background: url('@/assets/images/homeImages/assetManagement/arrow.png')
                        no-repeat;
                    background-size: 100% 100%;
                    margin-left: 4px;
                }
            }
            img {
                width: 141px;
                height: 124px;
            }
        }
        .right {
            width: 141px;
            .top {
                width: 141px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                p {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: right;
                    color: #23fffc;
                    line-height: 50px;
                }
                .images {
                    width: 10px;
                    height: 10px;
                    background: url('@/assets/images/homeImages/assetManagement/arrow.png')
                        no-repeat;
                    background-size: 100% 100%;
                    margin-left: 4px;
                    color: #23fffc;
                }
            }
            img {
                width: 141px;
                height: 124px;
            }
        }
    }
    .assetRepair {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding: 10px 10px;
        box-sizing: border-box;
        .assetRepair_item {
            width: 210px;
            height: 86px;
            display: flex;
            .left {
                width: 86px;
                height: 86px;
            }
            .right {
                width: calc(100% - 86px);
                height: 86px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 6px;
                box-sizing: border-box;
                padding: 10px 0;
                cursor: pointer;
                .lable {
                    height: 12px;
                    width: 100%;
                    background: url('@/assets/images/homeImages/assetManagement/InforBar.png')
                        no-repeat;
                    background-size: 100% 100%;
                    font-weight: 400;
                    font-size: 18px;
                    text-align: left;
                    color: #eff0f1;
                    position: relative;
                    span {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }
                .value {
                    font-weight: 700;
                    font-size: 26px;
                    text-align: left;
                    background-image: linear-gradient(
                        to bottom,
                        rgba(6, 89, 49, 1),
                        rgba(2, 255, 133, 1)
                    );
                    background-clip: text;
                    color: transparent;
                    text-indent: 10px;
                }
            }
        }
    }
    .meansBIM {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .left {
            width: 141px;
            .top {
                width: 141px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                p {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: right;
                    color: #23fffc;
                    line-height: 25px;
                }
                .images {
                    width: 10px;
                    height: 10px;
                    background: url('@/assets/images/homeImages/assetManagement/arrow.png')
                        no-repeat;
                    background-size: 100% 100%;
                    margin-left: 4px;
                }
            }
            img {
                width: 141px;
                height: 124px;
            }
        }
        .right {
            width: 141px;
            .top {
                width: 141px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                p {
                    font-weight: 700;
                    font-size: 18px;
                    text-align: right;
                    color: #23fffc;
                    line-height: 25px;
                }
                .images {
                    width: 10px;
                    height: 10px;
                    background: url('@/assets/images/homeImages/assetManagement/arrow.png')
                        no-repeat;
                    background-size: 100% 100%;
                    margin-left: 4px;
                    color: #23fffc;
                }
            }
            img {
                width: 141px;
                height: 124px;
            }
        }
    }
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
}
</style>
