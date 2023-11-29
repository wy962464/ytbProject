import { createApp } from 'vue';
import App from './App.vue';
import router from "@/routers";
import store from "@/store";
// 自定义指令
import directives from "@/directives/index";
// 全局注册element-plus icons
import elementIcon from "@/utils/svgicon";
// 清除浏览器默认样式
import '@/assets/css/clearDefault.scss';
// 页面自适应
// import "amfe-flexible/index.js";
// 时间格式化
import dayjs from 'dayjs'
// 组织架构图插件
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";
// 视频插件
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

let app = createApp(App)
app.use(router).use(store).use(directives).use(elementIcon).use(vue3TreeOrg).use(vue3videoPlay).mount('#app')
// 全局挂载
// app.config.globalProperties.$dayjs = dayjs
