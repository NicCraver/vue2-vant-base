import axios from "axios";
import { Toast } from "vant";
import { printInfo, printErr } from "./screenLog";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 16000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  error => {
    printErr(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果要获取http信息（例如标题或状态）
   * 请 return  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 这只是一个例子
   * 你也可以通过HTTP状态代码来判断状态
   */

  response => {
    const res = response.data;
    if (res.code !== 200) {
      printErr(response.config.url, res.msg || "服务器异常");
      Toast.fail(res.msg || "服务器异常");
      if (res.code === 401) {
        // to login
      }
      return Promise.reject(res);
    } else {
      printInfo(response.config.url, res.data);
      return res;
    }
  },
  error => {
    printErr("err" + error); // for debug
    Toast.fail(error.mgs || "服务器异常");
    return Promise.reject(error);
  }
);
export default service;
