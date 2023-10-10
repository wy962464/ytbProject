<script setup>
import headers from '@/components/page/header.vue';
import mains from '@/components/page/main.vue';
import DialogBox from '@/components/common/dialogBox.vue';
import DetailsDialogBox from '@/components/common/detailsDialogBox.vue';
import { AuthStore } from '@/store/modules/auth.js';
import { provide, ref } from 'vue';

const authStore = AuthStore();
const isShowHeaderBtn = ['/detailsEmergencyEvents', '/setUp'];

// 刷新当前页面
const isRouterShow = ref(true);
const refreshCurrentPage = val => (isRouterShow.value = val);
provide('refresh', refreshCurrentPage);
</script>

<template>
    <div class="page_main">
        <header>
            <headers />
        </header>
        <main
            :style="{
                background: isShowHeaderBtn.includes(authStore.routePath) ? '#020c17' : '',
            }"
            v-if="isRouterShow"
        >
            <mains />
        </main>
        <DialogBox />
        <DetailsDialogBox />
    </div>
</template>

<style scoped lang="scss">
.page_main {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;

    header {
        box-sizing: border-box;
        height: 80px;
        width: 100%;
    }

    main {
        box-sizing: border-box;
        height: calc(100% - 80px);
        width: 100%;
    }
}
</style>
