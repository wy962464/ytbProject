import router from "./router";
import NProgress from "./nprogress";
import { AuthStore } from "@/store/modules/auth.js"
import { UserStore } from "@/store/modules/user.js"
import { initRouter } from "@/routers/initRouter.js"
import { clearRequest } from '@/utils/index';

// 白名单
const routerWhiteList = ["/500"]

// 重置路由
export const resetRouter = () => {
    const authStore = AuthStore();
    authStore.getFlatMenuList.forEach(route => {
        const { name } = route;
        if (name && router.hasRoute(name)) router.removeRoute(name);
    });
};

//路由拦截
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const authStore = AuthStore()
    const userStore = UserStore()
    authStore.$patch({ ajaxCount: 0 })
    clearRequest()
    // 判断是访问登陆页，有token就在当前页面，没有token重置路由到登陆页
    if (to.path.toLocaleLowerCase() === "/login") {
        if (userStore.token) return next(from.fullPath);
        resetRouter();
        return next();
    }
    // 白名单直接跳转
    if (routerWhiteList.includes(to.path)) return next();
    // 判断有无token  没有直接跳转登录页
    if (!userStore.token) return next({ path: "/login", replace: true });
    // 如果没有菜单列表，就重新请求菜单列表并添加动态路由
    if (!authStore.getAuthMenuList.length) {
        await initRouter();
        return next({ ...to, replace: true });
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

router.onError(error => {
    NProgress.done();
    console.warn("路由错误", error.message);
});

export default router;