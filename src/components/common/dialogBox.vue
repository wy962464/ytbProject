<!-- 弹窗 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';
import { checkedTypeCellval, clearRequest } from '@/utils/index';
import { AuthStore } from '@/store/modules/auth.js';

const dialogStore = DialogStore();
const authStore = AuthStore();
function handlerClickClose() {
    dialogStore.dialogInfor.isShow = false;
    dialogStore.$reset();
}
function handlerSeletTab(obj, index) {
    dialogStore.dialogInfor.tabSeletNum = index;
    authStore.$patch({ ajaxCount: 0 });
    clearRequest();
    dialogStore.dialogInfor.tableLoading = false;
}
</script>

<template>
    <div class="dialogPage" v-if="dialogStore.dialogInfor.isShow">
        <div class="maskBox"></div>
        <div
            class="dialogMain"
            :style="{
                width: `${dialogStore.dialogInfor.width}px`,
                height: `${dialogStore.dialogInfor.height}px`,
            }"
        >
            <div class="card-title">{{ dialogStore.dialogInfor.title }}</div>
            <div class="card-close" @click="handlerClickClose"></div>
            <div class="card-main">
                <div
                    class="card-main-top"
                    v-if="checkedTypeCellval(dialogStore.dialogInfor.path) === 'Array'"
                >
                    <div class="tab">
                        <div
                            class="tabBtn"
                            :class="{ active: index == dialogStore.dialogInfor.tabSeletNum }"
                            v-for="(item, index) in dialogStore.dialogInfor.path"
                            :key="item.name"
                            @click="handlerSeletTab(item, index)"
                        >
                            {{ item.name }}
                            <span v-if="item.value">({{ item.value }})</span>
                        </div>
                    </div>
                    <div
                        class="back"
                        @click="dialogStore.dialogInfor.handlerClickBack()"
                        v-if="dialogStore.dialogInfor.backBtn"
                    ></div>
                </div>
                <div
                    class="card-main-bottom"
                    v-loading="dialogStore.dialogInfor.tableLoading"
                    element-loading-background="rgba(0, 0, 0, 0.3)"
                >
                    <component
                        v-if="checkedTypeCellval(dialogStore.dialogInfor.path) === 'Array'"
                        :is="
                            dialogStore.getComponentPath[dialogStore.dialogInfor.tabSeletNum]
                                .component
                        "
                    ></component>
                    <component
                        v-if="checkedTypeCellval(dialogStore.dialogInfor.path) === 'String'"
                        :is="dialogStore.getComponentPath"
                    ></component>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dialogPage {
    width: 100%;
    height: 100%;

    .maskBox {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dialogMain {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        background: #ccc;
        cursor: default;
        background: url('@/assets/images/pageImages/dialogFrame.png') no-repeat;
        background-size: 100% 100%;
        padding: 30px 20px 30px 20px;
        box-sizing: border-box;
        // box-shadow: 0 0 23px 0px rgba(0, 0, 0, 0.5);
        .card-title {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translate(-50%, 0);
            width: 188px;
            height: 45px;
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            color: #ffffff;
            line-height: 45px;
            letter-spacing: 3px;
            background: url('@/assets/images/pageImages/dialogTitle.png') no-repeat;
            background-size: 100% 100%;
        }
        .card-close {
            position: absolute;
            width: 30px;
            height: 30px;
            background: url('@/assets/images/pageImages/dialogClose.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            right: -15px;
            top: -15px;
        }
        .card-main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .card-main-top {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .tab {
                    height: 30px;
                    margin-bottom: 20px;
                    display: flex;
                    .tabBtn {
                        height: 30px;
                        min-width: 98px;
                        box-sizing: border-box;
                        padding: 0 15px;
                        background: url('@/assets/images/pageImages/tabBtn.png') no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                        line-height: 30px;
                        font-weight: 500;
                        font-size: 14px;
                        text-align: center;
                        color: #ffffff;
                        &.active {
                            background: url('@/assets/images/pageImages/tabBtnSelet.png') no-repeat;
                            background-size: 100% 100%;
                            color: #32fdfc;
                        }
                    }
                }
                .back {
                    height: 30px;
                    width: 30px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    background: url('@/assets/images/homeImages/parkingSafety/back.png') no-repeat;
                    background-size: 100% 100%;
                }
            }
            .card-main-bottom {
                flex-grow: 1;
                height: 0;
                width: 100%;
            }
        }
    }
}
</style>
