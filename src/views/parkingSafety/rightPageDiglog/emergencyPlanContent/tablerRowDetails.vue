<!-- 报警管理详情弹框 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';
import procedure from '@/components/common/procedure.vue';
import { reactive } from 'vue';

const dialogStore = DialogStore();
let procedureOption = reactive({
    isTop: true,
    procedureData: [{}],
});
</script>

<template>
    <div class="tablerRowDetails">
        <div class="top">
            <ul class="topList">
                <li>
                    <span class="label">警报编号：</span>
                    <span class="value">RC-20230323-232</span>
                </li>
                <li>
                    <span class="label">告警源设备：</span>
                    <span class="value">设备XXX</span>
                </li>
                <li>
                    <span class="label">警报类型：</span>
                    <span class="value">应急预案</span>
                </li>
                <li>
                    <span class="label">警报状态：</span>
                    <span class="value">已处理</span>
                </li>
                <li>
                    <span class="label">初始警报等级：</span>
                    <span class="value">严重</span>
                </li>
                <li>
                    <span class="label">现警报等级：</span>
                    <span class="value">--</span>
                </li>
                <li>
                    <span class="label">告警触发时间：</span>
                    <span class="value">2023-03-23 09:46:15.89</span>
                </li>
                <li>
                    <span class="label">告警恢复时间：</span>
                    <span class="value">2023-06-27 14:57:41.12</span>
                </li>
                <li>
                    <span class="label">告警描述：</span>
                    <span class="value">应急预案已启动：充电车辆起火应急预案</span>
                </li>
            </ul>
        </div>
        <div class="center">
            <p>警情图片</p>
            <div class="imgPath"></div>
        </div>
        <div class="bottom">
            <p>报警处置</p>
            <div class="procedure">
                <procedure v-model:procedureOption="procedureOption" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tablerRowDetails {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
        width: 100%;
        font-weight: 400;
        font-size: 12px;
        color: #ffffff;
        display: flex;
        justify-content: space-around;
        .topList {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            li {
                display: flex;
                align-items: center;
                margin-bottom: 18px;
                overflow: hidden;
                .label {
                    min-width: 120px;
                    text-align: right;
                }
                .value {
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
    .center {
        p {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            line-height: 28px;
        }
        .imgPath {
            width: 100%;
            height: 120px;
            box-shadow: 0 0 30px 0 #041d2c inset;
        }
    }
    .bottom {
        box-sizing: border-box;
        p {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            line-height: 28px;
        }
        .procedure {
            width: 100%;
            height: 140px;
            box-shadow: 0 0 30px 0 #041d2c inset;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 20px 0;
        }
    }
}
</style>
