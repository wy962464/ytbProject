<script setup>
import { ref } from 'vue';
import floorData from '@/assets/floor.json';
import { buttonClick, separate, close } from '@/utils/modelMethod.js';

const props = defineProps({
    top: {
        type: String,
        default: '',
    },
    left: {
        type: String,
        default: '',
    },
    bottom: {
        type: String,
        default: '',
    },
    right: {
        type: String,
        default: '',
    },
});
const floorList = floorData.value;
let floorNum = ref(null);
let statusNum = ref(null);
function handlerClick(value) {
    floorNum.value = value.name;
    buttonClick(value);
}
let statusBtn = [
    {
        name: '展开',
        key: 1,
        iconUrl: '/src/assets/images/pageImages/expand.png',
    },
    {
        name: '合并',
        key: 0,
        iconUrl: '/src/assets/images/pageImages/merge.png',
    },
];
function handlerClickStatus(value) {
    statusNum.value = value.key;
    if (statusNum.value == 0) {
        close();
    } else if (statusNum.value == 1) {
        separate();
    }
}
</script>

<template>
    <div
        class="floor"
        :style="{
            top: `${props.top}px`,
            left: `${props.left}px`,
            bottom: `${props.bottom}px`,
            right: `${props.right}px`,
        }"
    >
        <button
            class="floorStyle"
            v-for="item in floorList"
            :key="item.name"
            :class="{ active: item.name === floorNum }"
            @click="handlerClick(item)"
        >
            {{ item.floorName }}
        </button>
        <button
            class="statusStyle"
            v-for="item in statusBtn"
            :key="item.key"
            :class="{ active: item.key === statusNum }"
            @click="handlerClickStatus(item)"
        >
            <img :src="item.iconUrl" alt="" />
            <div>{{ item.name }}</div>
        </button>
    </div>
</template>

<style scoped lang="scss">
.floor {
    position: absolute;
    min-width: 80px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .floorStyle {
        border: none;
        width: 70px;
        height: 29px;
        background: url('@/assets/images/pageImages/floorBtn.png') no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        letter-spacing: 3px;
        margin-bottom: 10px;
        &.active {
            width: 80px;
            background: url('@/assets/images/pageImages/floorBtnSelet.png') no-repeat;
            background-size: 100% 100%;
            color: #28dd86;
        }
    }
    .statusStyle {
        border: none;
        width: 70px;
        height: 29px;
        background: url('@/assets/images/pageImages/floorBtn.png') no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        letter-spacing: 3px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            margin-right: 7px;
        }
        &.active {
            width: 80px;
            background: url('@/assets/images/pageImages/floorBtnSelet.png') no-repeat;
            background-size: 100% 100%;
            color: #30ffff;
        }
    }
}
</style>
