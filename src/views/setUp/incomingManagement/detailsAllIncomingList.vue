<!-- 来文清单任务详情 -->
<script setup>
import procedure from '@/components/common/procedure.vue';
import { reactive } from 'vue';

let procedureOption = reactive([{}, {}, {}, {}]);
</script>

<template>
    <div class="detailsAllIncomingList">
        <ul class="mainList">
            <li>
                <span class="label">事项：</span>
                <span class="value">2楼卫生间需要清理</span>
            </li>
            <li>
                <span class="label">来文单位：</span>
                <span class="value">场站公司</span>
            </li>
            <li>
                <span class="label">当前处理人：</span>
                <span class="value">刘骞</span>
            </li>
            <li>
                <span class="label">意见：</span>
                <span class="value">无</span>
            </li>
            <li>
                <span class="label">发文日期：</span>
                <span class="value">2023-07-01</span>
            </li>
            <li>
                <span class="label">当前状态：</span>
                <span class="value">已处理</span>
            </li>
        </ul>
        <div class="bottom">
            <p>流程进度</p>
            <div class="procedure">
                <procedure v-model:procedureOption="procedureOption" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.detailsAllIncomingList {
    height: 100%;
    width: 100%;
    .mainList {
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);

        li {
            display: flex;
            align-items: center;
            overflow: hidden;
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
    .bottom {
        box-sizing: border-box;
        p {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            line-height: 40px;
        }
        .procedure {
            width: 100%;
            height: 300px;
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
