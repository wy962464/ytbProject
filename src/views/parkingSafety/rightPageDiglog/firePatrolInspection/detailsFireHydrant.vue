<!-- 消防栓巡检详情 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
</script>

<template>
    <div class="detailsFireExtinguisher">
        <ul class="mainList">
            <li>
                <span class="label">资产名称：</span>
                <span class="value">2楼卫生间需要清理</span>
            </li>
            <li>
                <span class="label">资产编码：</span>
                <span class="value">场站公司</span>
            </li>
            <li>
                <span class="label">安装部位：</span>
                <span class="value">刘骞</span>
            </li>
            <li>
                <span class="label">所在楼层：</span>
                <span class="value">无</span>
            </li>
            <li>
                <span class="label">巡检日期：</span>
                <span class="value">2023-07-01</span>
            </li>
            <li>
                <span class="label">巡检人：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">箱体：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">玻璃：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">水带：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">水枪：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">接头：</span>
                <span class="value">已处理</span>
            </li>
            <li>
                <span class="label">闸门：</span>
                <span class="value">已处理</span>
            </li>
        </ul>
        <p>巡检图片</p>
        <div class="imgPath"></div>
    </div>
</template>

<style scoped lang="scss">
.detailsFireExtinguisher {
    height: 100%;
    width: 100%;
    .mainList {
        width: 100%;
        height: 170px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);

        li {
            display: flex;
            align-items: center;
            overflow: hidden;
            font-size: 14px;
            .label {
                text-align: right;
                min-width: 130px;
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
