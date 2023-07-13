import { defineStore } from "pinia";
import { piniaPersistConfig } from "@/store/initPiniaPersist.js";

export const UserStore = defineStore({
    id: "UserState",
    state: () => {
        return {
            token: null,
            tokenHead: null,
            tkUserToken: null,
            code: null,
            num: 15
        }
    },
    getters: {},
    actions: {
        setCode() {
            this.code = new Date().getTime() + (this.num * 1000 + 1000)
        }
    },
    // 持久化缓存
    persist: piniaPersistConfig("UserState")
})