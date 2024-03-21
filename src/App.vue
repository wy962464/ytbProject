<script setup>
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AuthStore } from '@/store/modules/auth.js';
import { SidebarStore } from '@/store/modules/sidebar.js';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 页面自适应
import autofit from 'autofit.js';

const route = useRoute();
const authStore = AuthStore();
const sidebarStore = SidebarStore();
// 监听路由
watch(
    () => route.path,
    newValue => {
        authStore.routePath = newValue;
        const contain = authStore.getFlatMenuList.some(item => item.path == authStore.getRoutePath);
        if (newValue !== '/login' && contain) {
            const path = authStore.getFlatMenuList.find(
                item => item.path == authStore.getRoutePath
            );
            if (path.meta) {
                sidebarStore.isModel = path.meta.isModel;
                if (path.meta.isModel) {
                    sidebarStore.setLeftSidebar(path.meta.leftSidebar);
                    sidebarStore.setCenterSidebar(path.meta.centerSidebar);
                    sidebarStore.setRightSidebar(path.meta.rightSidebar);
                }
            }
        }
    }
);
onMounted(() => {
    autofit.init(
        {
            designHeight: 1080,
            designWidth: 1920,
            renderDom: '#app',
            resize: true,
        },
        false
    );
});
</script>

<template>
    <el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
</template>

<style scoped lang="scss"></style>
