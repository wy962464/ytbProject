<!-- 充电统计 -->
<script setup>
import Echarts from '@/components/common/Echarts.vue';
import { optionsDepotOperations } from '@/utils/echartsJson.js';
import { ref } from 'vue';
const btnList = [
    {
        name: '今天',
        key: 0,
    },
    {
        name: '实时',
        key: 1,
    },
];
const btnValue = ref('今天');
function handlerBtn(value) {
    btnValue.value = value.name;
}
</script>

<template>
    <div class="charging">
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
            </el-space>
        </div>
        <Echarts class="bottom" :options="optionsDepotOperations" />
    </div>
</template>

<style scoped lang="scss">
.charging {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
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
