<script setup>
import { useRouter } from 'vue-router';
import { UserStore } from '@/store/modules/user.js';
import { AuthStore } from '@/store/modules/auth.js';
import { findMenuByPath } from '@/utils/index.js';

const router = useRouter();
const userStore = UserStore();
const authStore = AuthStore();
const isShowHeaderBtn = ['/detailsEmergencyEvents', '/setUp'];
let leftBtnList = [];
let rightBtnList = [];
authStore.getShowMenuList.map((item, index) => {
    if (index < 2) {
        leftBtnList.push(item);
    }
    if (index >= 2) {
        rightBtnList.push(item);
    }
});
function handlerClick(value) {
    router.replace({ name: value.name });
}
function handlerClicks() {
    userStore.$reset();
    router.replace('/login');
}
const handlerClickSetUp = () => {
    const { href } = router.resolve({ name: 'setUp' });
    window.open(href, '_blank');
};
const handlerClickgoHome = () => {
    router.replace('/Home');
};
</script>

<template>
    <div class="btnList">
        <div v-if="!isShowHeaderBtn.includes(authStore.routePath)">
            <button
                class="leftBtn"
                :class="{
                    active:
                        item.path ==
                        findMenuByPath(authStore.getAuthMenuList, authStore.routePath).path,
                }"
                v-for="item in leftBtnList"
                :key="item.path"
                type="primary"
                @click="handlerClick(item)"
            >
                {{ item.meta.title }}
            </button>
        </div>
        <div
            class="goHome"
            v-if="!isShowHeaderBtn.includes(authStore.routePath)"
            @click="handlerClickgoHome"
        ></div>
        <div v-if="!isShowHeaderBtn.includes(authStore.routePath)">
            <button
                class="rightBtn"
                :class="{
                    active:
                        item.path ==
                        findMenuByPath(authStore.getAuthMenuList, authStore.routePath).path,
                }"
                v-for="item in rightBtnList"
                :key="item.path"
                type="primary"
                @click="handlerClick(item)"
            >
                {{ item.meta.title }}
            </button>
        </div>
        <div
            class="setUp"
            @click="handlerClickSetUp"
            v-if="!isShowHeaderBtn.includes(authStore.routePath)"
        ></div>
    </div>
</template>

<style scoped lang="scss">
.btnList {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: url('@/assets/images/pageImages/header.png') no-repeat;
    background-size: 100% 100%;
    padding: 0 200px 10px 200px;
    position: relative;
    .setUp {
        position: absolute;
        width: 40px;
        height: 40px;
        background: url('@/assets/images/pageImages/setUp.png') no-repeat;
        background-size: 100% 100%;
        right: 30px;
        cursor: pointer;
    }
    .goHome {
        width: 560px;
        height: 80px;
        cursor: pointer;
    }
}
.leftBtn {
    border: none;
    width: 130px;
    height: 40px;
    background: url('@/assets/images/pageImages/leftBtn.png') no-repeat;
    background-size: 100% 100%;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 3px;
    margin: 0 5px;
    &.active {
        background: url('@/assets/images/pageImages/leftBtnSelect.png') no-repeat;
        background-size: 100% 100%;
        color: #00ff84;
    }
}
.rightBtn {
    border: none;
    width: 130px;
    height: 40px;
    background: url('@/assets/images/pageImages/rightBtn.png') no-repeat;
    background-size: 100% 100%;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    margin: 0 5px;
    letter-spacing: 3px;
    &.active {
        background: url('@/assets/images/pageImages/rightBtnSelect.png') no-repeat;
        background-size: 100% 100%;
        color: #00ff84;
    }
}
</style>
