<!-- 设置 -->
<script setup>
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { findMenuPath, clearRequest } from '@/utils/index.js';
import { shallowRef, defineAsyncComponent, onMounted, ref } from 'vue';

const modules = import.meta.glob('@/views/**/*.vue');
let componentUrl = shallowRef(null);
let defaultActive = ref('1-1');
const getComponentPath = url => {
    return defineAsyncComponent(modules['/src/views' + url + '.vue']);
};
let menuList = [
    {
        name: '综合管理',
        key: '1',
        children: [
            {
                name: '会议管理',
                key: '1-1',
                path: '/setUp/conferenceRoom/index',
            },
            {
                name: '文件管理',
                key: '1-2',
                path: '/setUp/fileManagement/index',
            },
            {
                name: '信息发布',
                key: '1-3',
                path: '/setUp/informationRelease/index',
            },
            {
                name: '来文管理',
                key: '1-4',
                path: '/setUp/incomingManagement/index',
            },
            {
                name: '用房管理',
                key: '1-5',
                path: '/setUp/housingManagement/index',
            },
        ],
    },
    {
        name: '配置管理',
        key: '2',
        children: [
            {
                name: '单位管理',
                key: '2-1',
                path: '/setUp/unitsManager/index',
            },
            {
                name: '人员管理',
                key: '2-2',
                path: '/setUp/personnelManager/index',
            },
            {
                name: '用户管理',
                key: '2-3',
                path: '/setUp/userManager/index',
            },
            {
                name: '角色管理',
                key: '2-4',
                path: '/setUp/rolesManager/index',
            },
        ],
    },
];
onMounted(() => {
    componentUrl.value = getComponentPath(findMenuPath(menuList, defaultActive.value, 'key').path);
});
const handlerClickSelect = (index, indexPath, item) => {
    clearRequest();
    componentUrl.value = getComponentPath(findMenuPath(menuList, item.index, 'key').path);
};
</script>

<template>
    <div class="setUp">
        <div class="setUp_left">
            <detailsInforStyle :isShowTitle="false">
                <template #main>
                    <el-menu
                        :default-active="defaultActive"
                        :collapse="false"
                        background-color="rgba(0, 0, 0, 0)"
                        text-color="#ffffff"
                        active-text-color="#00ff84"
                        @select="handlerClickSelect"
                    >
                        <el-sub-menu :index="item.key" v-for="item in menuList" :key="item.key">
                            <template #title>
                                <span style="font-size: 16px">{{ item.name }}</span>
                            </template>
                            <el-menu-item
                                :index="keys.key"
                                v-for="keys in item.children"
                                :key="keys.key"
                            >
                                {{ keys.name }}
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </template>
            </detailsInforStyle>
        </div>
        <div class="setUp_right">
            <detailsInforStyle :isShowTitle="false">
                <template #main>
                    <component :is="componentUrl"></component>
                </template>
            </detailsInforStyle>
        </div>
    </div>
</template>

<style scoped lang="scss">
.setUp {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .setUp_left {
        width: 260px;
        height: 100%;
        .el-menu {
            border-right: solid 1px rgba(0, 0, 0, 0);
            :deep(.el-sub-menu__title) {
                height: 40px;
                line-height: 40px;
            }
            .el-menu-item {
                height: 30px;
                line-height: 30px;
                font-size: 16px;
            }
            .el-menu-item:hover {
                background: linear-gradient(
                    to right,
                    rgba(31, 255, 147, 0),
                    rgba(31, 255, 147, 0.5)
                );
            }
        }
    }
    .setUp_right {
        width: calc(100% - 280px);
        height: 100%;
    }
}
</style>
