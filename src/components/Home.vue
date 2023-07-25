<script setup>
import headers from '@/components/page/header.vue';
import mains from '@/components/page/main.vue';
import DialogBox from '@/components/common/dialogBox.vue';
import DetailsDialogBox from '@/components/common/detailsDialogBox.vue';
import { AuthStore } from '@/store/modules/auth.js';

const authStore = AuthStore();
</script>

<template>
    <div class="page_main">
        <header>
            <headers />
        </header>
        <main
            :style="{
                background: authStore.routePath === '/detailsEmergencyEvents' ? '#020c17' : '',
            }"
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
