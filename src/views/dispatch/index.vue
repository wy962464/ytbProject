<!-- 盐田北综合车场运行调度系统 -->
<script setup>
import { getCurrentInstance, ref, onMounted, onBeforeUnmount } from 'vue';
const { proxy } = getCurrentInstance();
const value = ref(null);
const data = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
];
const timeList = {
    0: '星期天',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
};
let timer = ref(null);
let currentTime = ref(` 
    ${proxy.$dayjs().format('YYYY-MM-DD')}\xa0\xa0
    ${proxy.$dayjs().format('HH:mm:ss')}\xa0\xa0
    ${timeList[proxy.$dayjs().format('d')]}`);

onMounted(() => {
    timer.value = setInterval(() => {
        currentTime.value = ` 
    ${proxy.$dayjs().format('YYYY-MM-DD')}\xa0\xa0
    ${proxy.$dayjs().format('HH:mm:ss')}\xa0\xa0
    ${timeList[proxy.$dayjs().format('d')]}`;
    }, 1000);
});
onBeforeUnmount(() => {
    clearInterval(timer);
});
</script>

<template>
    <div class="page">
        <div class="header">
            <div class="header_left">盐田北综合车场运行调度系统</div>
            <div class="header_right">
                <div class="company">
                    <el-tree-select
                        default-expand-all
                        v-model="value"
                        :data="data"
                        check-strictly
                        style="width: 240px"
                    />
                </div>
                <div class="user">
                    <el-avatar :size="25" icon="UserFilled" />
                </div>
                <div class="time">{{ currentTime }}</div>
            </div>
        </div>
        <div class="main"></div>
    </div>
</template>

<style scoped lang="scss">
.page {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/loginImages/buildImg.png') no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 0 500px 55px #181818 inset;
    .header {
        width: 100%;
        height: 50px;
        background-color: rgba(3, 9, 28, 0.8);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header_left {
            box-sizing: border-box;
            height: 100%;
            background: url('@/assets/images/dispatchImages/titleBg.png') no-repeat;
            background-size: 100% 100%;
            font-size: 20px;
            line-height: 50px;
            padding: 0 48px 0 35px;
            cursor: pointer;
        }
        .header_right {
            min-width: 40%;
            margin-right: 15px;
            display: flex;
            justify-content: space-between;
            .user,
            .company {
                display: flex;
                align-items: center;
            }
            .time {
                line-height: 50px;
            }
        }
    }
    .main {
        height: calc(100% - 50px);
        width: 100%;
    }
}
</style>
