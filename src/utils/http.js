import axios from "axios"; // 引入axios
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import { Toast } from "vant";

axios.defaults.timeout = 10000;

// TODO: 请求基础路径
// const baseURL = process.env.NODE_ENV
// const baseURL = 'http://rap2.taobao.org:38080/app/mock/262203/'
// const baseURL = 'http://192.168.198.217:28769'

const baseURL = process.env.VUE_APP_BASE_URL;
const timeout = 6000;
// http 说明表
const ERROR_MSG = {
  400: "请求错误(400)",
  401: "未授权，请重新登录(401)",
  403: "拒绝访问(403)",
  404: "请求出错(404)",
  408: "请求超时(408)",
  429: "系统繁忙，请稍后重试(429)",
  502: "网络错误(502)",
  503: "服务不可用(503)",
  504: "网络超时(504)"
};

// 请求拦截器 添加token， 判断登录之类操作
instance.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV === "development") {
      const url = config.url;
      if (mockMatch(url)) {
        config.baseURL = mockURL;
      }
    }

    // 在这里做认证，可以从store里面获取token
    // config.headers['Authorization'] = `Bearer ${store.getters.getAccessToken}`

    // 如果get  请求有缓存，可以加这段代码
    if (config.method === "get") {
      const now = `${Date.now()}`;
      if (config.params) {
        config.params[now] = now;
      } else {
        const hasParams = config.url.includes("?");
        config.url = config.url + (hasParams ? "&" : "?") + `${now}=${now}`;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器，对返回数据进行预处理
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
/**
 * 对 请求进行封装 只有 status 与 code 都是200 才会进入 then , 否则均进入 catch
 * @param {*} options
 */
const request = (options = {}) => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(({ data, status, statusText }) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject(statusText);
        }
      })
      .catch(result => {
        if (!result || !result.response) {
          reject(result);
        }
        const {
          response: { status, statusText, data = {} }
        } = result;
        switch (status) {
          // 未登录
          case 401:
            sessionStorage.clear();
            reject("您还未登录");
            break;
          case 403:
            reject("登录失效");
            break;
          case 404:
            reject("访问异常，请联系系统管理员");
            // 请求丢失
            break;
          default:
            reject(data.message || statusText);
            break;
        }
      });
  });
};

export const get = (url, params = {}) => {
  return request({
    url,
    method: "get",
    params
  });
};

export const put = (url, data = {}) => {
  return request({
    url,
    method: "put",
    data
  });
};

export const post = (url, data = {}) => {
  return request({
    url,
    method: "post",
    data
  });
};

export const del = (url, data = {}) => {
  return request({
    url,
    method: "delete",
    data
  });
};
