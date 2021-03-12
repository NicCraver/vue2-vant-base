import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";
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

const modulesFiles = require.context("./modules", true, /\.js$/);

// 应该 `import app from './modules/app'` 省去引入modules
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default new Vuex.Store({
  modules,
  getters,
  plugins: [...plugins]
});
