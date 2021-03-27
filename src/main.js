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

import '@/apis/request'

Vue.use(CustomComponent, {});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
