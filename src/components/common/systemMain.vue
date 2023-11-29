<!-- 系统管理组件 -->
<script setup>
import { checkedType, clearRequest } from '@/utils/index';
import { defineAsyncComponent, ref } from 'vue';
import { AuthStore } from '@/store/modules/auth.js';

const modules = import.meta.glob('@/views/**/*.vue');
const authStore = AuthStore();
const props = defineProps({
    systemMainOption: {
        type: Object,
        default: () => {},
    },
});
let path = ref(null);
const getComponentPath = () => {
    if (
        props.systemMainOption.path &&
        checkedType(props.systemMainOption.path) === 'String'
    ) {
        path = defineAsyncComponent(modules['/src/views' + props.systemMainOption.path + '.vue']);
    } else if (
        props.systemMainOption.path &&
        checkedType(props.systemMainOption.path) === 'Array'
    ) {
        path = props.systemMainOption.path.map(item => {
            return {
                name: item.name,
                component: item.component
                    ? defineAsyncComponent(modules['/src/views' + item.component + '.vue'])
                    : undefined,
                value: item.value ? item.value : '',
            };
        })[props.systemMainOption.tabSeletNum].component;
    }
};
getComponentPath();
function handlerSeletTab(obj, index) {
    props.systemMainOption.tabSeletNum = index;
    authStore.$patch({ ajaxCount: 0 });
    clearRequest();
    getComponentPath();
}
</script>

<template>
    <div class="systemMain">
        <div class="tab" v-if="checkedType(props.systemMainOption.path) === 'Array'">
            <div
                class="tabBtn"
                :class="{ active: index == props.systemMainOption.tabSeletNum }"
                v-for="(item, index) in props.systemMainOption.path"
                :key="item.name"
                @click="handlerSeletTab(item, index)"
            >
                {{ item.name }}
                <span v-if="item.value">({{ item.value }})</span>
            </div>
        </div>
        <div class="main">
            <component
                v-if="checkedType(props.systemMainOption.path) === 'Array'"
                :is="path"
            ></component>
            <component
                v-if="checkedType(props.systemMainOption.path) === 'String'"
                :is="path"
            ></component>
        </div>
    </div>
</template>

<style scoped lang="scss">
.systemMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .tab {
        height: 30px;
        margin-bottom: 20px;
        display: flex;
        width: 100%;
        .tabBtn {
            height: 30px;
            min-width: 98px;
            box-sizing: border-box;
            padding: 0 15px;
            background: url('@/assets/images/pageImages/tabBtn.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            line-height: 30px;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
            color: #ffffff;
            &.active {
                background: url('@/assets/images/pageImages/tabBtnSelet.png') no-repeat;
                background-size: 100% 100%;
                color: #32fdfc;
            }
        }
    }
    .main {
        flex-grow: 1;
        height: 0;
        width: 100%;
    }
}
</style>
