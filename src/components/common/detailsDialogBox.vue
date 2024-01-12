<!-- 详情弹窗 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
function handlerClickClose() {
    dialogStore.$patch({
        detailsDialogInfor: {
            isShow: false,
            isUpdate: false,
            isDetails: false,
            obj: {},
        },
    });
}
</script>

<template>
    <div class="dialogPage" v-if="dialogStore.detailsDialogInfor.isShow">
        <div class="maskBox"></div>
        <div
            class="dialogMain"
            :style="{
                width: `${dialogStore.detailsDialogInfor.width}px`,
                height: `${dialogStore.detailsDialogInfor.height}px`,
            }"
        >
            <div class="card-title">
                <div class="card-name">{{ dialogStore.detailsDialogInfor.title }}</div>
                <div class="card-line"></div>
            </div>
            <div class="card-close" @click="handlerClickClose"></div>
            <div class="card-main">
                <component :is="dialogStore.getDetailsComponentPath"></component>
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
        z-index: 3;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dialogMain {
        width: 740px;
        height: 610px;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 4;
        transform: translate(-50%, -47%);
        background: #ccc;
        cursor: default;
        background: url('@/assets/images/pageImages/detailsBj.png') no-repeat;
        background-size: 100% 100%;
        padding: 20px 10px;
        box-sizing: border-box;
        .card-close {
            position: absolute;
            top: -15px;
            right: -15px;
            width: 30px;
            height: 30px;
            background: url('@/assets/images/pageImages/dialogClose.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
        }
        .card-title {
            width: 100%;
            height: 22px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .card-name {
                height: 16px;
                line-height: 16px;
                font-weight: 500;
                font-size: 16px;
                text-align: left;
                color: #ffffff;
                margin-bottom: 5px;
                &::before {
                    content: '';
                    display: inline-block;
                    width: 3px;
                    height: 16px;
                    background-color: #24fdfa;
                    margin-right: 10px;
                    margin-bottom: 5px;
                    vertical-align: middle;
                }
            }
            .card-line {
                height: 1px;
                width: 100%;
                background: url('@/assets/images/pageImages/titleLine.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .card-main {
            box-sizing: border-box;
            height: calc(100% - 22px);
            width: 100%;
            padding: 20px 20px 0 20px;
        }
    }
}
</style>
