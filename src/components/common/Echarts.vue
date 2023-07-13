<script setup>
import { onActivated, onMounted, onBeforeUnmount, unref, ref, watch, nextTick } from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
    className: {
        type: String,
        default: 'chart',
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '100%',
    },
    options: {
        type: Object,
        default: undefined,
    },
    isClick: {
        type: Boolean,
        default: false,
    },
});
const chartRef = ref(null);
let chart = null;
watch(
    () => props.options,
    newOptions => {
        nextTick(() => {
            if (chart) {
                chart.setOption(newOptions, true);
            }
        });
    },
    {
        deep: true,
    }
);
const emits = defineEmits(['callbackFun']);
onMounted(() => {
    nextTick(() => {
        initChart();
    });
});
const initChart = function () {
    const chartRefWrap = unref(chartRef);
    if (chartRefWrap) {
        chart = echarts.init(chartRefWrap);
        if (props.isClick) {
            chart.on('click', params => {
                emits('callbackFun', params);
            });
        }
        chart.setOption(props.options, true);
        window.addEventListener('resize', chartsResize);
    }
};
onActivated(() => {
    if (chart) {
        nextTick(() => {
            chart.resize();
        });
    }
});
const chartsResize = function () {
    chart && chart.resize();
};
onBeforeUnmount(() => {
    window.removeEventListener('resize', chartsResize);
    chart = null;
});
</script>

<template>
    <div
        ref="chartRef"
        :class="props.className"
        :style="{ height: props.height, width: props.width }"
    ></div>
</template>

<style scoped lang="scss"></style>
