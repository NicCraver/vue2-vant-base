import request from "@/utils/request";

export const getDemoData = (params = {}) => {
  return request({
    url: "http://jsonplaceholder.typicode.com/albums",
    method: "get",
    params: params
  });
};
export const postDemoData = data => {
  return request({
    url: "/list",
    method: "post",
    data
  });
};
export const putDemoData = data => {
  return request({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data
  });
};
export const delDemoData = data => {
  return request({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
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

export const getUser = data => {
  return request({
    url: "/getUser",
    method: "get",
    data
  });
};
