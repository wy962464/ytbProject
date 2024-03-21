<!-- 进出场统计 -->
<script setup>
import { ref } from 'vue';
import { optionsStatistics } from '@/utils/echartsJson.js';

const btnList = [
    {
        name: '今天',
        key: 0,
    },
    {
        name: '近七天',
        key: 1,
    },
    {
        name: '近一个月',
        key: 1,
    },
];
const btnValue = ref('今天');
const value1 = ref('');
function handlerBtn(value) {
    btnValue.value = value.name;
}
</script>

<template>
    <div class="statistics">
        <div class="top">
            <el-space :size="10">
                <div
                    class="btn"
                    :class="{ active: item.name === btnValue }"
                    v-for="item in btnList"
                    :key="item.key"
                    @click="handlerBtn(item)"
                >
                    {{ item.name }}
                </div>
                <el-date-picker
                    v-model="value1"
                    style="width: 257px"
                    popper-class="scopePickerClass"
                    :editable="false"
                    type="daterange"
                    range-separator="~"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                />
            </el-space>
        </div>
        <Echarts class="bottom" :options="optionsStatistics" />
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';

.statistics {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .bottom {
        flex-grow: 1;
    }
}
.btn {
    min-width: 70px;
    height: 24px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    background-color: rgba(13, 21, 30, 0);
    border: 2px solid #153f3f;
    line-height: 24px;
    cursor: pointer;
    &.active {
        color: #08bab9ff;
        border: 2px solid #08bab9ff;
    }
}
</style>
