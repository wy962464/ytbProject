<!-- 维修清单详情弹框 -->
<script setup>
import { DialogStore } from '@/store/modules/dialog.js';
import procedure from '@/components/common/procedure.vue';
import { reactive } from 'vue';
import { getImageUrl } from '@/utils';

const dialogStore = DialogStore();
let procedureOption = reactive([{}, {}, {}, {}, {}]);
</script>

<template>
    <el-scrollbar>
        <div class="tablerRowDetails">
            <div class="top">
                <ul class="topList">
                    <li>
                        <span class="label">单号：</span>
                        <span class="value">RC-20230323-232</span>
                    </li>
                    <li>
                        <span class="label">当前状态：</span>
                        <span class="value">设备XXX</span>
                    </li>
                    <li>
                        <span class="label">申请人：</span>
                        <span class="value">应急预案</span>
                    </li>
                    <li>
                        <span class="label">申请时间：</span>
                        <span class="value">已处理</span>
                    </li>
                    <li>
                        <span class="label">设备名称：</span>
                        <span class="value">严重</span>
                    </li>
                    <li>
                        <span class="label">设备编码：</span>
                        <span class="value">--</span>
                    </li>
                    <li>
                        <span class="label">具体位置：</span>
                        <span class="value">2023-03-23 09:46:15.89</span>
                    </li>
                    <li>
                        <span class="label">问题描述：</span>
                        <span class="value">2023-06-27 14:57:41.12</span>
                    </li>
                    <li>
                        <span class="label">问题备注：</span>
                        <span class="value">应急预案已启动：充电车辆起火应急预案</span>
                    </li>
                </ul>
            </div>
            <div class="center">
                <p>维修项目</p>
                <div class="imgPath"></div>
            </div>
            <div class="centerImg">
                <p>维修前后对比</p>
                <div class="content">
                    <div class="textImg">
                        <p>维修前</p>
                        <img :src="getImageUrl('loginImages/xiuli.png')" alt="" />
                    </div>
                    <div class="textImg">
                        <p>维修后</p>
                        <img :src="getImageUrl('loginImages/xiuli.png')" alt="" />
                    </div>
                </div>
            </div>
            <div class="bottom">
                <p>流程进度</p>
                <div class="procedure">
                    <procedure v-model:procedureOption="procedureOption" />
                </div>
            </div>
        </div>
    </el-scrollbar>
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
            width: 300px;
            height: 120px;
            box-shadow: 0 0 30px 0 #041d2c inset;
        }
    }
    .centerImg {
        p {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            line-height: 28px;
        }
        .content {
            width: 100%;
            height: 233px;
            display: flex;
            justify-content: space-between;
            .textImg {
                p {
                    font-weight: 400;
                    font-size: 14px;
                    text-align: center;
                    color: #ffffff;
                }
                img {
                    width: 309px;
                    height: 205px;
                }
            }
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
            height: 420px;
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
