import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
// 缓存Vuex插件 操作Vuex数据后 会自动缓存所有Vuex数据
import createPersistedState from "vuex-persistedstate";
// 项目配置文件
import { vuexStorage, localStorage } from "../config";

Vue.use(Vuex);

const plugins = [];
// 判断是否开启vuex缓存 默认localStorage
if (vuexStorage && !localStorage) {
  plugins.push(createPersistedState());
}
// 判断是否开启localStorage 不开启则使用sessionStorage
if (vuexStorage && localStorage) {
  plugins.push(createPersistedState({ storage: window.sessionStorage }));
}

// 应该为 `import app from './modules/app'` 省去一个一个引入modules
const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

// 初始化Vuex
export default new Vuex.Store({
  modules,
  getters,
  plugins: [...plugins]
});
