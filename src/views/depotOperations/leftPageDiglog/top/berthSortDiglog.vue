<!-- 泊位分类 -->
<script setup>
import Echarts from '@/components/common/Echarts.vue';
import { optionsCylinder } from '@/utils/echartsJson.js';
</script>

<template>
    <div class="sort">
        <div class="sort_top">
            <p>泊位总数：715个</p>
            <p>
                <span class="text_color">公交车位</span>
                <span>：654（其中子母车位：76，充电车位：348，非充电位：154）</span>
            </p>
            <div class="sort_top_bottom">
                <p>
                    <span class="text_color">小车车位</span>
                    <span>：50</span>
                </p>
                <p>
                    <span class="text_color">维修车位</span>
                    <span>：11</span>
                </p>
            </div>
        </div>
        <div class="sort_bottom">
            <Echarts :options="optionsCylinder" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.sort {
    width: 100%;
    height: 100%;
    .sort_top {
        height: 55px;
        width: 100%;
        margin-bottom: 15px;
        text-align: center;
        color: #fefefe;
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
        letter-spacing: 2px;
        .text_color {
            color: #23fffc;
        }
        .sort_top_bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            p:nth-child(1) {
                margin-right: 20px;
            }
        }
    }
    .sort_bottom {
        height: calc(100% - 70px);
        width: 100%;
    }
}
</style>
