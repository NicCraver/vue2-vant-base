import { get, post, put, del } from "@/utils/http";

export default {
  getDemoData: (data = {}) => {
    return get("http://jsonplaceholder.typicode.com/users", data);
  },
  postDemoData: data => {
    return post("https://jsonplaceholder.typicode.com/posts", data);
  },
  putDemoData: data => {
    return put("https://jsonplaceholder.typicode.com/posts/1", data);
  },
  delDemoData: data => {
    return del("https://jsonplaceholder.typicode.com/posts/1", data);
  },
  uploaderDemoData: data => {
    return post("https://httpbin.org/post", data);
  }
};
