<script setup>
import { getImageUrl } from '@/utils';

const props = defineProps({
    cardProps: {
        type: Object,
        default: () => {
            return {
                title: '',
                isMore: false,
                isClick: false,
                size: null,
            };
        },
    },
});
const emit = defineEmits(['handlerClick']);
function handlerClick() {
    emit('handlerClick');
}
</script>

<template>
    <div
        class="cardMain"
        :style="{
            backgroundImage: `url(${
                props.cardProps.size == 'medium'
                    ? getImageUrl('pageImages/borderCardTwo.png')
                    : props.cardProps.size == 'large'
                    ? getImageUrl('pageImages/borderCardThree.png')
                    : getImageUrl('pageImages/borderCard.png')
            })`,
        }"
    >
        <div class="top">
            <div class="topLeft">{{ props.cardProps.title }}</div>
            <div class="topRightMore" v-if="props.cardProps.isMore" @click="handlerClick">
                <el-space :size="3">
                    <div>更多</div>
                    <div class="imgs"></div>
                </el-space>
            </div>
            <div v-else-if="props.cardProps.isClick" class="topRightTotal" @click="handlerClick">
                <slot name="topRight"></slot>
            </div>
            <div v-else class="noClick">
                <slot name="topRight"></slot>
            </div>
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardMain {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .top {
        height: 40px;
        width: 100%;
        background: url('@/assets/images/pageImages/titleCard.png') no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 0 15px 6px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        .topLeft {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            cursor: default;
        }
        .topRightTotal {
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #00ff84;
            text-decoration: underline;
            cursor: pointer;
        }
        .noClick {
            font-weight: 500;
            font-size: 16px;
            color: #ffffff;
            cursor: default;
        }
        .topRightMore {
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 14px;
            color: #cccccc;
            cursor: pointer;
            .imgs {
                width: 10px;
                height: 10px;
                background: url('@/assets/images/pageImages/arrow.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        &:hover {
            color: #00ff84;
            .noClick {
                color: #00ff84;
            }
            .topRightMore {
                color: #00ff84;
                .imgs {
                    background: url('@/assets/images/pageImages/arrowSelect.png') no-repeat;
                }
            }
        }
    }
    .main {
        flex-grow: 1;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
