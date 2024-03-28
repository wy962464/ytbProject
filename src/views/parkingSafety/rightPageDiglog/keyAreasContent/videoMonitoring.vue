<!-- 视频监控 -->
<script setup>
import cameraTree from '@/components/common/cameraTree.vue';
import videoPlayer from '@/components/common/videoPlayer.vue';
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { reactive } from 'vue';

let monitorList = reactive({ list: [] });
const handlerClickView = arr => {
    monitorList.list = arr;
};
</script>

<template>
    <div class="videoMonitoring">
        <div class="left">
            <div class="top">摄像头列表</div>
            <div class="bottom">
                <cameraTree @handlerClickView="handlerClickView" />
            </div>
        </div>
        <div class="right">
            <detailsInforStyle>
                <template #name>视频区域</template>
                <template #main>
                    <el-scrollbar>
                        <div class="videos">
                            <div class="videos_box" v-for="item in monitorList.list">
                                <videoPlayer :src="item.src" :type="item.type" />
                            </div>
                        </div>
                    </el-scrollbar>
                </template>
            </detailsInforStyle>
        </div>
    </div>
</template>

<style scoped lang="scss">
.videoMonitoring {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 260px;
        height: 100%;
        margin-right: 20px;
        box-sizing: border-box;
        border: 1px solid rgba(27, 117, 146, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 10px 0px 10px;
        margin-right: 20px;
        .top {
            height: 43px;
            width: 100%;
            line-height: 43px;
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
        }
        .bottom {
            height: calc(100% - 43px);
            width: 100%;
        }
    }
    .right {
        width: calc(100% - 260px);
        height: 100%;
        .videos {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px 10px;
            box-sizing: border-box;
            justify-content: center;
            padding-right: 10px;
            .videos_box {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
