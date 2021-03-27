import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 为了首屏加载快，所以首页不使用懒加载
import Home from "../views/Home.vue";

// 自动扫描 modules 里面的路由模块，路由模块请根据业务自行拆分
const files = require.context("./modules", false, /\.js$/);
const routes = [];
// 获取所有的路由内容
files.keys().forEach(key => {
  const file = files(key).default;
  // 根据导出的内容判断是否数组，如果数组需使用扩展运算符
  if (Array.isArray(file)) {
    routes.push(...file);
  } else {
    routes.push(file);
  }
});

routes.push(
  ...[
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { title: "Home" }
    },
    // 无权限页面
    {
      path: "/no-permission",
      name: "NoPermission",
      component: () => import("@/views/error-page/no-permission/index.vue"),
      meta: {
        title: "访问无权限"
      }
    },
    // 404 页面路由
    {
      path: "*",
      name: "NotFound",
      component: () => import("@/views/error-page/404/index.vue"),
      meta: {
        title: "页面走丢了"
      }
    }
  ]
);

const router = new VueRouter({
  routes,
  // 页面滚动行为
  scrollBehavior(/* to, from, savedPosition */) {
    return {
      x: 0,
      y: 0
    };
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
