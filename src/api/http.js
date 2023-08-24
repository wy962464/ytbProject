import axios from "axios";
import qs from "qs";
import { AuthStore } from "@/store/modules/auth.js"
import { UserStore } from "@/store/modules/user.js"
import { showLoading, hideLoading } from "@/utils/loading.js"
import router from "@/routers/index.js";

const authStore = AuthStore()
const userStore = UserStore()
const instance = axios.create({
    timeout: 60000, // 请求时长
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 跨域时候允许携带凭证
    withCredentials: true
});
// 请求前拦截
window._axiosPromiseArr = [];
instance.interceptors.request.use(
    async (config) => {
        //  isLoading判断接口是否要全局加载
        if (config.headers.isLoading) {
            showLoading()
        }
        // 页面跳转清空上个页面请求
        config.cancelToken = new axios.CancelToken(cancel => {
            window._axiosPromiseArr.push({
                cancel
            });
        })
        authStore.updateAjaxCount(1);
        let token = userStore.token;
        let tokenHead = userStore.tokenHead;
        // 处理序列化数据
        // applications为任意设置的值，用来区分数据格式
        if (config.method === "post") {
            if (config.data) {
                if (config.headers.applications !== "json") {
                    config.data = qs.stringify(config.data);
                }
            }
        }
        if (token && tokenHead) {
            if (config.headers.applications !== "json") {
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            } else {
                config.headers['Content-Type'] = 'application/json';
            }
            config.headers['Authorization'] = tokenHead + token;
            config.headers['tkUserToken'] = token;
        }
        return config;
    },
    (error) => {
        hideLoading()
        authStore.updateAjaxCount(-1);
        return Promise.reject(error);
    }
);
// 请求后，添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        hideLoading()
        authStore.updateAjaxCount(-1);
        if (response.data.code === 401) {
            ElMessage({
                message: "会话过期，请重新登录！",
                type: "error",
                duration: 1500,
                onClose: () => {
                    router.replace({ name: 'login' })
                }
            });
            return;
        }
        return response;
    },
    (error) => {
        hideLoading()
        authStore.updateAjaxCount(-1)
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    ElMessage.error(`请求错误！ ${error}`);
                    break;
                case 401:
                    ElMessage({
                        message: "会话过期，请重新登录！",
                        type: "error",
                        duration: 100,
                        onClose: () => {
                            router.replace({ name: 'login' })
                        }
                    });
                    break;
                case 403:
                    router.replace({ name: '403' })
                    ElMessage({
                        message: `拒绝访问！ ${error}`,
                        type: "error",
                        duration: 3000,
                    });
                    break;
                case 404:
                    router.replace({ name: '404' })
                    ElMessage({
                        message: `请求地址出错：${error.response.config.url}，${error}`,
                        type: "error",
                        duration: 3000,
                    });
                    break;
                case 405:
                    ElMessage.error("请求方式错误！请您稍后重试");
                    break;
                case 408:
                    ElMessage.error("请求超时！请您稍后重试");
                    break;
                case 500:
                    router.replace({ name: '500' })
                    ElMessage({
                        message: `服务器内部错误！ ${error}`,
                        type: "error",
                        duration: 3000,
                    });
                    break;
                case 502:
                    ElMessage.error("网关错误！");
                    break;
                case 503:
                    ElMessage.error("服务不可用！");
                    break;
                case 504:
                    ElMessage.error("网关超时！");
                    break;
                default:
                    ElMessage.error("请求失败！");
            }
        }
        if (error.message && error.message.includes('timeout')) {
            ElMessage({
                message: `请求超时！`,
                type: 'error',
            })
        }
        return Promise.reject(error);
    }
);

// 使用es6的类，await返回一个promise
class http {
    static async get(url, params, headers) {
        return await instance.get(url, { params, headers });
    }
    static async getFile(url, params, headers) {
        return await instance.get(url, { params, headers, responseType: 'blob' });
    }
    static async post(url, params, headers) {
        return await instance.post(url, params, headers);
    }
}

export default http;