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

// apis
import api from "@/apis";

Vue.use(CustomComponent, {});

Vue.config.productionTip = false;

// 原型链挂载
Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
