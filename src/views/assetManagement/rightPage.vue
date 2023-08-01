<script setup>
import { reactive } from 'vue';
import CardBox from '@/components/common/cardBox.vue';
import { getImageUrl } from '@/utils';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
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
function handlerClick() {
    alert('点击了');
}
const handlerClickInventory = () => {
    dialogStore.$patch({
        dialogInfor: {
            title: '资产清单管理',
            isShow: true,
            width: 1279,
            height: 685,
            path: '/assetManagement/leftPageDiglog/inventoryManagement',
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
                        <div class="top">
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
            @handlerClick="handlerClick"
        ></CardBox>
        <CardBox class="CardBox" v-model:cardProps="cardPropsBottom"></CardBox>
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
                justify-content: flex-end;
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
