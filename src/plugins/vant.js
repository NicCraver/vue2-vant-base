import Vue from "vue";
import {
  Cell,
  Toast,
  NavBar,
  Button,
  Uploader,
  Divider,
  Tab,
  Tabs
} from "vant";

// toast loading 设置
// duration	展示时长(ms)，值为 0 时，toast 不会消失
Toast.setDefaultOptions("loading", { forbidClick: true, duration: 0 });

Vue.use(Cell)
  .use(Toast)
  .use(NavBar)
  .use(Button)
  .use(Divider)
  .use(Tab)
  .use(Tabs)
  .use(Uploader);
