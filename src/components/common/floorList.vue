<script setup>
import floorData from '@/assets/floor.json';
import { buttonClick, separate, close } from '@/utils/modelMethod.js';
import { getImageUrl } from '@/utils';
import { ThreeModel } from '@/store/modules/modelManager.js';

const threeModel = ThreeModel();
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
function handlerClick(value) {
    buttonClick(value);
}
let statusBtn = [
    {
        name: '展开',
        key: 'open',
        iconUrl: 'pageImages/expand.png',
    },
    {
        name: '合并',
        key: 'close',
        iconUrl: 'pageImages/merge.png',
    },
];
function handlerClickStatus(value) {
    threeModel.sceneInformation.floorName = value.key;
    if (threeModel.sceneInformation.floorName == 'open') {
        separate();
    } else if (threeModel.sceneInformation.floorName == 'close') {
        close();
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
        <div class="floorBtn">
            <button
                class="floorStyle"
                v-for="item in floorList"
                :key="item.name"
                :class="{
                    active:
                        item.name ===
                        floorList.find(item => threeModel.sceneInformation.floorName == item.name)
                            ?.name,
                }"
                @click="handlerClick(item)"
            >
                {{ item.floorName }}
            </button>
        </div>
        <div class="statusBtn">
            <button
                class="statusStyle"
                v-for="item in statusBtn"
                :key="item.key"
                :class="{ active: item.key === threeModel.sceneInformation?.floorName }"
                @click="handlerClickStatus(item)"
            >
                <img :src="getImageUrl(item.iconUrl)" alt="" />
                <div>{{ item.name }}</div>
            </button>
        </div>
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
    .floorBtn {
        display: flex;
        flex-direction: column;
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
            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
    .statusBtn {
        margin-top: 38px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
            // &:hover {
            //     width: 80px;
            //     background: url('@/assets/images/pageImages/floorBtnSelet.png') no-repeat;
            //     background-size: 100% 100%;
            //     color: #28dd86;
            // }
            &.active {
                width: 80px;
                background: url('@/assets/images/pageImages/floorBtnSelet.png') no-repeat;
                background-size: 100% 100%;
                color: #28dd86;
            }
            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
}
</style>
