<template>
    <div class="not-container">
        <img src="@/assets/images/errorImages/404.png" class="not-img" alt="404" />
        <div class="not-detail">
            <h2>404</h2>
            <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
            <el-button type="danger" @click="authStore.handlerBack">返回首页</el-button>
        </div>
    </div>
</template>

<script setup>
import { AuthStore } from '@/store/modules/auth.js';
const authStore = AuthStore();
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
