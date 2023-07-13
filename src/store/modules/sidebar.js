import { defineStore } from "pinia";
import { defineAsyncComponent } from "vue";

export const SidebarStore = defineStore({
    id: "SidebarState",
    state: () => {
        return {
            isModel: true,
            leftSidebar: {
                title: "",
                path: null,
                isShow: true
            },
            centerSidebar: {
                title: "",
                path: null,
                isShow: true
            },
            rightSidebar: {
                title: "",
                path: null,
                isShow: true
            }
        }
    },
    getters: {
        // 获取左侧组件地址
        getLeftSidebarPath: state => defineAsyncComponent(state.leftSidebar.path),
        // 获取中间组件地址
        getCenterSidebarPath: state => defineAsyncComponent(state.centerSidebar.path),
        // 获取右侧组件地址
        getRightSidebarPath: state => defineAsyncComponent(state.rightSidebar.path),
    },
    actions: {
        setLeftSidebar(obj) {
            this.leftSidebar = obj
        },
        setCenterSidebar(obj) {
            this.centerSidebar = obj
        },
        setRightSidebar(obj) {
            this.rightSidebar = obj
        }
    }
})