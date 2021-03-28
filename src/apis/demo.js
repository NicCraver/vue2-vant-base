import { get, post, put, del } from "@/utils/http";

export const getDemoData = (data = {}) => {
  return get("http://jsonplaceholder.typicode.com/users", data);
};
export const postDemoData = data => {
  return post("https://jsonplaceholder.typicode.com/posts", data);
};
export const putDemoData = data => {
  return put("https://jsonplaceholder.typicode.com/posts/1", data);
};
export const delDemoData = data => {
  return del("https://jsonplaceholder.typicode.com/posts/1", data);
};
