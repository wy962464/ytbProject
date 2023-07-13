<script setup>
import { useRouter } from 'vue-router';
import { UserStore } from '@/store/modules/user.js';
import { AuthStore } from '@/store/modules/auth.js';

const router = useRouter();
const userStore = UserStore();
const authStore = AuthStore();
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
    router.push({ name: value.name });
}
function handlerClicks() {
    userStore.$reset();
    router.replace('/login');
}
</script>

<template>
    <div class="btnList">
        <div>
            <button
                class="leftBtn"
                :class="{ active: item.path == authStore.routePath }"
                v-for="item in leftBtnList"
                :key="item.path"
                type="primary"
                @click="handlerClick(item)"
            >
                {{ item.meta.title }}
            </button>
        </div>
        <div>
            <button
                class="rightBtn"
                :class="{ active: item.path == authStore.routePath }"
                v-for="item in rightBtnList"
                :key="item.path"
                type="primary"
                @click="handlerClick(item)"
            >
                {{ item.meta.title }}
            </button>
        </div>
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
    padding-bottom: 10px;
    padding-left: 200px;
    padding-right: 200px;
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
