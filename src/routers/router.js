import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";

/**
 * @description 动态路由参数配置
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param component ==> views下文件的路径 eg:/example/example
 * @param redirect ==> 重定向地址
 * @param meta ==>菜单信息
 * @param meta.title ==> 菜单标题
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏
 * @param meta.isModel ==> 是否显示模型
 * @param meta.leftSidebar ==> 左侧边栏信息
 * @param meta.leftSidebar.title ==> 左侧边栏标题
 * @param meta.leftSidebar.path ==> 左侧边栏地址
 * @param meta.leftSidebar.isShow ==> 左侧边栏是否显
 * @param meta.centerSidebar ==> 中间组件信息
 * @param meta.centerSidebar.title ==> 中间组件标题
 * @param meta.centerSidebar.path ==> 中间组件地址
 * @param meta.centerSidebar.isShow ==> 中间组件是否显示
 * @param meta.rightSidebar ==> 右侧边栏信息
 * @param meta.rightSidebar.title ==> 右侧边栏标题
 * @param meta.rightSidebar.path ==> 右侧边栏地址
 * @param meta.rightSidebar.isShow ==> 右侧边栏是否显示
 */

const staticRoute = [
    {
        path: "/",
        redirect: "/Home",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/components/Login.vue"),
    },
    {
        path: "/layout",
        name: "layout",
        component: () => import("@/components/Home.vue"),
        redirect: "/Home",
        children: []
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/components/ErrorMessage/404.vue")
    },
    {
        path: "/500",
        name: "500",
        component: () => import("@/components/ErrorMessage/500.vue")
    },
    {
        path: "/403",
        name: "403",
        component: () => import("@/components/ErrorMessage/403.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/components/ErrorMessage/404.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: staticRoute,
    // 切换页面，滚动到最顶部
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, left: 0 };
    },
});

export default router;