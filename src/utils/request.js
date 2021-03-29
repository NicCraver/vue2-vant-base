import axios from "axios";
import { Toast } from "vant";
import { printANSI, printInfo } from "./screenLog";
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

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
    console.log(error); // for debug
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
    console.log(`response`, response);
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200 && response.status !== 201) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // todo
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      }
      console.log(`222`, 222);
      return Promise.reject(new Error(response.statusText || "Error"));
    } else {
      // printInfo(response.config.url, res);
      // printANSI();
      printInfo(response.config.url, res);
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
