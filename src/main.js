import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import "@/style/base.less";
// 引入vant组件
import "@/plugins/vant";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
