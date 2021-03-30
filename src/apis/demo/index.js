// 此文件mock接口对应 mock/modules/demo.js
import request from "@/utils/request";

// url为mock 模块中定义的url
export const getDemoData = (params = {}) => {
  return request({
    url: "/getList",
    method: "get",
    params: params
  });
};
export const postDemoData = data => {
  return request({
    url: "/postList",
    method: "post",
    data
  });
};

export const uploaderDemoData = data => {
  return request({
    url: "https://httpbin.org/post",
    method: "post",
    data
  });
};

// 登录失败示例
export const loginFail = data => {
  return request({
    url: "/loginFail",
    method: "post",
    data
  });
};
