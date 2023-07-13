<template>
    <div class="not-container">
        <img src="@/assets/images/errorImages/500.png" class="not-img" alt="500" />
        <div class="not-detail">
            <h2>500</h2>
            <h4>抱歉，您的网络不见了~🤦‍♂️🤦‍♀️</h4>
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
