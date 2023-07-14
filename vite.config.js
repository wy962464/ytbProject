import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";
import viteCompression from 'vite-plugin-compression';
// px转rem
import postCssPxToRem from "postcss-pxtorem";
import autoprefixer from "autoprefixer";
// 自动导入Element组件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const alias = {
  "@": resolve(__dirname, ".", "src"),
  "views": resolve(__dirname, ".", "src/views/"),
  "css": resolve(__dirname, ".", "src/assets/css/"),
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      })
    ],
    resolve: {
      alias,
    },
    base: env.VITE_PUBLIC_PATH,
    build: {
      target: "modules", //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
      outDir: "dist", // 构建得包名  默认：dist
      assetsDir: "static", // 静态资源得存放路径文件名 static
      sourcemap: false, //构建后是否生成 source map 文件
      minify: "esbuild", // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: "chrome61", //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          }
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          // postCssPxToRem({
          //   rootValue: 192, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192
          //   propList: ["*", "!border"], // 除 border 外所有px 转 rem
          //   selectorBlackList: [".el-"], // 过滤掉.el-开头的class，不进行rem转换
          // }),
          autoprefixer({
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
              "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: false,
          }),
        ],
      },
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: 6060,
      open: false,
      cors: true,
      hmr: true, //开启热加载
      // 代理跨域
      proxy: {
        "/api": {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
        },
      },
    },
    // 打包去除 console.log && debugger
    esbuild: {
      pure: ["console.log", "debugger"],
    },
    assetsInclude: ["**/*.glb", "**/*.fbx"],
  }
})