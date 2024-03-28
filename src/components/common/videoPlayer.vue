<!-- 视频插件 -->
<script setup>
import { reactive, onMounted } from 'vue';

const props = defineProps({
    src: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'video/mp4',
    },
});
const options = reactive({
    width: '100%', //播放器高度
    height: '260px', //播放器高度
    color: '#409eff', //主题色
    title: '', //视频名称
    src: '', //视频源
    type: '', //视频类型
    muted: false, //静音
    webFullScreen: false, //网页全屏
    speed: true, //是否支持快进快退
    currentTime: 0, //跳转到固定播放时间(s)
    speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
    autoPlay: true, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false, //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: ['quality', 'fullScreen', 'speedRate'], //显示所有按钮,
    preload: 'auto', //预加载 meta/auto/none
});
onMounted(() => {
    options.src = props.src;
    options.type = props.type;
});
</script>

<template>
    <vue3VideoPlay v-bind="options" />
</template>

<style scoped lang="scss"></style>
