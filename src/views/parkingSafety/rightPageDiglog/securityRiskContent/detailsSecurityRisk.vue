<!-- 风险源详情 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';
import { isContent } from '@/utils/index';

const dialogStore = DialogStore();
</script>

<template>
    <div class="detailsSecurityRisk">
        <ul class="topList">
            <li>
                <span class="label">风险源名称：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.berthCode) }}
                </span>
            </li>
            <li>
                <span class="label">风险源归属：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.bimCode) }}
                </span>
            </li>
            <li>
                <span class="label">风险等级：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.berthType) }}
                </span>
            </li>
            <li>
                <span class="label">所在楼层：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.floor) }}
                </span>
            </li>
            <li>
                <span class="label">风险源地点：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.company) }}
                </span>
            </li>
            <li>
                <span class="label">责任单位：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.berthState) }}
                </span>
            </li>
            <li>
                <span class="label">责任人：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.time) }}
                </span>
            </li>
            <li>
                <span class="label">隐患内容：</span>
                <span class="value">
                    {{ isContent(dialogStore.detailsDialogInfor.obj.content) }}
                </span>
            </li>
        </ul>
        <p>风险源照片</p>
        <div class="imgPath"></div>
    </div>
</template>

<style scoped lang="scss">
.detailsSecurityRisk {
    width: 100%;
    height: 100%;
    .topList {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        font-weight: 400;
        font-size: 12px;
        color: #ffffff;
        height: 130px;
        li {
            display: flex;
            align-items: center;
            overflow: hidden;
            .label {
                text-align: right;
                min-width: 100px;
            }
            .value {
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    p {
        font-weight: 500;
        font-size: 16px;
        text-align: left;
        color: #ffffff;
        line-height: 40px;
    }
    .imgPath {
        width: 200px;
        height: 160px;
        box-shadow: 0 0 30px 0 #041d2c inset;
    }
}
</style>
