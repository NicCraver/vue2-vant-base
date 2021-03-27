import axios from "axios"; // 引入axios
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Toast } from "vant";

// 环境的切换
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "https://www.baidu.com";
} else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = "https://www.ceshi.com";
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "https://www.production.com";
}

axios.defaults.timeout = 10000;
