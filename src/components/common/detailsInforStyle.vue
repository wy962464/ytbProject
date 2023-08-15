<!-- 详细信息样式 -->
<script setup>
const props = defineProps({
    isShowTitle: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <div class="details">
        <div class="card-title" v-if="props.isShowTitle">
            <div class="card-name">
                <slot name="name"></slot>
            </div>
            <div class="card-line"></div>
        </div>
        <div class="card-main">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.details {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 30px 0 #041d2c inset;
    display: flex;
    flex-direction: column;
    .card-title {
        width: 100%;
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        box-sizing: border-box;
        margin-top: 20px;
        .card-name {
            height: 16px;
            line-height: 16px;
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            margin-bottom: 5px;
            &::before {
                content: '';
                display: inline-block;
                width: 3px;
                height: 15px;
                background-color: #24fdfa;
                margin-right: 10px;
                vertical-align: middle;
            }
        }
        .card-line {
            height: 1px;
            width: 100%;
            background: url('@/assets/images/pageImages/titleLine.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    .card-main {
        box-sizing: border-box;
        flex-grow: 1;
        height: 0;
        width: 100%;
        padding: 20px 20px 20px 20px;
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
    }
}
</style>
