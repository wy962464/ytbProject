<script setup>
import { SidebarStore } from '@/store/modules/sidebar.js';
import { AuthStore } from '@/store/modules/auth.js';
import Model from './model.vue';
import footers from '@/components/page/footer.vue';

const sidebarStore = SidebarStore();
const authStore = AuthStore();
</script>

<template>
    <div class="content" v-if="sidebarStore.isModel">
        <!-- 模型 -->
        <div class="content_model">
            <Model />
        </div>
        <div class="content_card">
            <!-- 左侧边栏 -->
            <div
                class="leftSidebar"
                v-if="sidebarStore.leftSidebar.isShow && sidebarStore.leftSidebar.path"
            >
                <transition appear name="left-transform" mode="out-in">
                    <component :is="sidebarStore.getLeftSidebarPath"></component>
                </transition>
            </div>
            <!-- 中间栏 -->
            <div
                class="centerSidebar"
                v-if="sidebarStore.centerSidebar.isShow && sidebarStore.centerSidebar.path"
            >
                <transition appear name="center-transform" mode="out-in">
                    <component :is="sidebarStore.getCenterSidebarPath"></component>
                </transition>
            </div>
            <!-- 右侧边栏 -->
            <div
                class="rightSidebar"
                v-if="sidebarStore.rightSidebar.isShow && sidebarStore.rightSidebar.path"
            >
                <transition appear name="right-transform" mode="out-in">
                    <component :is="sidebarStore.getRightSidebarPath"></component>
                </transition>
            </div>
        </div>
        <div class="frameLeft">
            <div class="frameLeftBg"></div>
        </div>
        <div class="frameRight">
            <div class="frameRightBg"></div>
        </div>
    </div>
    <div class="contents" v-else>
        <router-view v-slot="{ Component, route }">
            <transition appear name="left-transform" mode="out-in">
                <keep-alive :include="authStore.getKeepAliveName">
                    <component :is="Component" :key="route.path" />
                </keep-alive>
            </transition>
        </router-view>
        <div class="frameLeft">
            <div class="frameLeftBg"></div>
        </div>
        <div class="frameRight">
            <div class="frameRightBg"></div>
        </div>
    </div>
    <footer>
        <footers />
    </footer>
</template>

<style scoped lang="scss">
.content {
    height: calc(100% - 20px);
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 20px 30px 0 30px;

    .content_model {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    .content_card {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        box-sizing: border-box;

        .leftSidebar {
            text-align: center;
            height: 100%;
            width: 450px;
            position: relative;
            left: 0%;
        }
        .centerSidebar {
            box-sizing: border-box;
            text-align: center;
            height: calc(100% / 3 - 20px);
            width: calc(100% - 900px);
            position: relative;
            padding: 0 20px;
        }
        .rightSidebar {
            text-align: center;
            height: 100%;
            width: 450px;
            position: relative;
            right: 0%;
        }
    }
    .frameRight {
        height: 100%;
        width: 20px;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        right: 10px;
        .frameRightBg {
            background: url('@/assets/images/pageImages/frameRight.png') no-repeat;
            background-size: 100% 100%;
            height: 100%;
            width: 9px;
        }
    }
    .frameLeft {
        height: 100%;
        width: 20px;
        display: flex;
        position: absolute;
        top: 0;
        left: 10px;
        .frameLeftBg {
            background: url('@/assets/images/pageImages/frameLeft.png') no-repeat;
            background-size: 100% 100%;
            height: 100%;
            width: 9px;
        }
    }
}
.contents {
    height: calc(100% - 20px);
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 0 30px;
    .frameRight {
        height: 100%;
        width: 20px;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        right: 10px;
        .frameRightBg {
            background: url('@/assets/images/pageImages/frameRight.png') no-repeat;
            background-size: 100% 100%;
            height: 100%;
            width: 9px;
        }
    }
    .frameLeft {
        height: 100%;
        width: 20px;
        display: flex;
        position: absolute;
        top: 0;
        left: 10px;
        .frameLeftBg {
            background: url('@/assets/images/pageImages/frameLeft.png') no-repeat;
            background-size: 100% 100%;
            height: 100%;
            width: 9px;
        }
    }
}

footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
}

/* left-transform */
.left-transform-leave-active,
.left-transform-enter-active {
    transition: all 0.2s;
}

.left-transform-enter-from {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-30px);
}

.left-transform-leave-to {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(30px);
}

/* center-transform */
.center-transform-leave-active,
.center-transform-enter-active {
    transition: all 0.2s;
}

.center-transform-enter-from {
    opacity: 0;
    transition: all 0.2s;
    transform: translateY(30px);
}

.center-transform-leave-to {
    opacity: 0;
    transition: all 0.2s;
    transform: translateY(-30px);
}

/* right-transform */
.right-transform-leave-active,
.right-transform-enter-active {
    transition: all 0.2s;
}

.right-transform-enter-from {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(30px);
}

.right-transform-leave-to {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-30px);
}
</style>
