import { createApp } from 'vue';
import App from './App.vue';
import router from "@/routers";
import store from "@/store";
// 自定义指令
import directives from "@/directives/index";
// 全局注册element-plus icons
import elementIcon from "@/utils/svgicon";
// 清除浏览器默认样式
import 'css/clearDefault.scss';
import "amfe-flexible/index.js";
// 时间格式化
import dayjs from 'dayjs'

let app = createApp(App)
app.use(router).use(store).use(directives).use(elementIcon).mount('#app')
// 全局挂载
// app.config.globalProperties.$dayjs = dayjs
