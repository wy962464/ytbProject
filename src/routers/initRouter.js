import { AuthStore } from "@/store/modules/auth";
import { UserStore } from "@/store/modules/user.js"
import router from "@/routers/index.js";

const modules = import.meta.glob("@/views/**/*.vue");

export const initRouter = async () => {
    const authStore = AuthStore();
    const userStore = UserStore()

    try {
        // 获取菜单列表
        await authStore.getMenuList();

        // 判断有没有菜单权限
        if (!authStore.getAuthMenuList.length) {
            ElNotification({
                title: "无权限访问",
                message: "当前账号无任何菜单权限，请联系系统管理员！",
                type: "warning",
                duration: 3000,
                showClose: false,
            });
            userStore.$reset();
            router.replace("/login");
            return Promise.reject("No permission");
        }
        // 添加动态路由
        authStore.getFlatMenuList.forEach((item) => {
            item.children && delete item.children;
            if (item.component && typeof item.component == "string") {
                item.component = modules["/src/views" + item.component + ".vue"];
            } else {
                item.component = modules["/src/views/Home/index.vue"];
            }
            if (item.meta && item.meta.leftSidebar.path) {
                item.meta.leftSidebar.path = modules["/src/views" + item.meta.leftSidebar.path + ".vue"];
            }
            if (item.meta && item.meta.centerSidebar.path) {
                item.meta.centerSidebar.path = modules["/src/views" + item.meta.centerSidebar.path + ".vue"];
            }
            if (item.meta && item.meta.rightSidebar.path) {
                item.meta.rightSidebar.path = modules["/src/views" + item.meta.rightSidebar.path + ".vue"];
            }
            if (item.meta.isFull) {
                router.addRoute(item);
            } else {
                router.addRoute("layout", item);
            }
        });
    } catch (error) {
        userStore.$reset();
        router.replace("/login");
        return Promise.reject(error);
    }
}