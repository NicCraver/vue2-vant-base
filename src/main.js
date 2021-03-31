import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// 引入style
import "@/style/base.less";

// 注册全局组件
import CustomComponent from "./components";

// 引入vant组件
import "@/plugins/vant";

// VUE_APP_MOCK的值为true，并且在开发环境下使用mock
if (process.env.VUE_APP_MOCK && process.env.NODE_ENV === "development") {
  require("../mock");
}

Vue.use(CustomComponent, {});

Vue.config.productionTip = false;

import { printANSI } from "@/utils/screenLog";
printANSI();

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
