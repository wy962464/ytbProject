import { defineStore } from "pinia";
import { defineAsyncComponent } from "vue";
import { checkedType } from '@/utils/index';

const modules = import.meta.glob("@/views/**/*.vue");
export const DialogStore = defineStore({
    id: "DialogState",
    state: () => {
        return {
            dialogInfor: {
                title: "",
                isShow: false,
                backBtn: false,
                tabSeletNum: 0,
                width: 850,
                height: 615,
                // 返回的点击事件
                handlerClickBack: null,
                path: null,  // Array || String
                tableLoading: false
            },
            detailsDialogInfor: {
                title: "",
                isShow: false,
                path: "",
                width: 700,
                height: 570,
                // 是否修改
                isUpdate: false,
                // 是否查看/详情
                isDetails: false,
                obj: {}
            }
        }
    },
    getters: {
        // 获取组件的地址
        getComponentPath: state => {
            if (state.dialogInfor.path && checkedType(state.dialogInfor.path) === 'String') {
                return defineAsyncComponent(modules["/src/views" + state.dialogInfor.path + ".vue"])
            } else if (state.dialogInfor.path && checkedType(state.dialogInfor.path) === 'Array') {
                return state.dialogInfor.path.map(item => {
                    return {
                        name: item.name,
                        component: item.component ? defineAsyncComponent(modules["/src/views" + item.component + ".vue"]) : undefined,
                        value: item.value ? item.value : '',
                    }
                })
            }
        },
        // 获取详情组件地址
        getDetailsComponentPath: state => {
            if (state.detailsDialogInfor.path) {
                return defineAsyncComponent(modules["/src/views" + state.detailsDialogInfor.path + ".vue"])
            }
        }
    },
    actions: {}
})