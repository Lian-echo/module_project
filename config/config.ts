import { defineConfig } from "umi";
import routes from "./routes";
import defaultSettings from "./defaultSettings";
import proxy from "./proxy";

export default defineConfig({
  // 开发环境的环境变量
  define: {
    "process.env.API_HOST": "", // dev 本地开发环境
  },
  nodeModulesTransform: {
    type: "none",
  },
  mfsu: {},
  dynamicImport: {
    loading: "@/components/loading",
  },
  hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  antd: {
    // 配置开启antd组件库的使用
    dark: true, // 开启暗黑主题
  },
  // title: false,
  // 配置式路由
  routes: routes,
  title: defaultSettings.title,
  fastRefresh: {},
  mock: false, // 禁用 Umi 内置的 mock 插件及其功能。
  proxy: proxy["dev"],
  theme: {
    "@primary-color": defaultSettings.primaryColor,
  },
  targets: {
    ie: 11,
  },
  locale: {
    default: "zh-CN",
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: "-",
  },
  dva: {
    immer: true,
    hmr: true, // 表示是否启用 dva model 的热更新。
  },
  // layout: {
  //   // 支持任何不需要 dom 的
  //   // https://procomponents.ant.design/components/layout#prolayout
  //   name: 'Ant 1111',
  //   locale: true,
  //   layout: 'side',
  // },
});
