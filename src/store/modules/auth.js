import { defineStore } from "pinia";
import router from "@/routers/index.js";
import { getFlatArr, showMenuList, getKeepAliveRouterName } from "@/utils/index";

export const AuthStore = defineStore({
    id: "AuthState",
    state: () => {
        return {
            ajaxCount: 0,
            authMenuList: [],
            routePath: null
        }
    },
    getters: {
        //后端返回的菜单列表
        getAuthMenuList: state => state.authMenuList,
        // 菜单列表扁平化之后的一维数组路由，用来添加动态路由
        getFlatMenuList: state => getFlatArr(state.authMenuList),
        // 菜单列表的处理
        getShowMenuList: state => showMenuList(state.authMenuList),
        // 获取当前路由信息
        getRoutePath: state => state.routePath,
        // 获取需要缓存的页面
        getKeepAliveName: state => getKeepAliveRouterName(state.authMenuList)
    },
    actions: {
        // 更新请求次数
        updateAjaxCount(count) {
            this.ajaxCount = this.ajaxCount + count
        },
        // 返回首页
        handlerBack() {
            router.replace({ name: 'layout' })
        },
        // 模拟接口返回数据
        getList() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let routerLists = [
                        {
                            path: "/Home",
                            name: "Home",
                            component: "/Home/leftPage",
                            meta: {
                                title: "首页",
                                isModel: true,
                                isHide: true,
                                leftSidebar: {
                                    path: "/Home/leftPage",
                                    isShow: true
                                },
                                centerSidebar: {
                                    path: "/Home/centerPage",
                                    isShow: true
                                },
                                rightSidebar: {
                                    path: "/Home/rightPage",
                                    isShow: true
                                }
                            }
                        },
                        {
                            path: "/depotOperations",
                            name: "depotOperations",
                            component: "/depotOperations/leftPage",
                            meta: {
                                title: "车场运营",
                                isModel: true,
                                leftSidebar: {
                                    path: "/depotOperations/leftPage",
                                    isShow: true
                                },
                                centerSidebar: {
                                    path: "",
                                    isShow: false
                                },
                                rightSidebar: {
                                    path: "/depotOperations/rightPage",
                                    isShow: true
                                }
                            }
                        },
                        {
                            path: "/parkingSafety",
                            name: "parkingSafety",
                            component: "/parkingSafety/leftPage",
                            meta: {
                                title: "车场安全",
                                isModel: true,
                                leftSidebar: {
                                    path: "/parkingSafety/leftPage",
                                    isShow: true
                                },
                                centerSidebar: {
                                    path: "",
                                    isShow: false
                                },
                                rightSidebar: {
                                    path: "/parkingSafety/rightPage",
                                    isShow: true
                                }
                            }
                        },
                        {
                            path: "/building",
                            name: "building",
                            component: "/building/leftPage",
                            meta: {
                                title: "楼宇自控",
                                isModel: true,
                                leftSidebar: {
                                    path: "/building/leftPage",
                                    isShow: true
                                },
                                centerSidebar: {
                                    path: "/building/centerPage",
                                    isShow: true
                                },
                                rightSidebar: {
                                    path: "/building/rightPage",
                                    isShow: true
                                }
                            }
                        },
                        {
                            path: "/assetManagement",
                            name: "assetManagement",
                            component: "/assetManagement/leftPage",
                            meta: {
                                title: "资产管理",
                                isModel: true,
                                leftSidebar: {
                                    path: "/assetManagement/leftPage",
                                    isShow: true
                                },
                                centerSidebar: {
                                    path: "",
                                    isShow: false
                                },
                                rightSidebar: {
                                    path: "/assetManagement/rightPage",
                                    isShow: true
                                }
                            }
                        },
                    ]
                    resolve(routerLists)
                }, 2000)
            })
        },
        async getMenuList() {
            let data = await this.getList()
            this.authMenuList = data
        },
    },
})