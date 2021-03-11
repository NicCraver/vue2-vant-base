import { ChildVuex } from "super-vuex";
import axios from 'axios'
// 'user'为命名空间
const child = new ChildVuex("user");
child.setState({
  list: [],
  name: "evio",
  age: 18,
  students: [
    {
      name: "yixianle",
      age: 10
    }
  ],
  load: {
    allow: true,
    total: 100
  }
});
child.setAction("load.data.fetch", async () => {
  const res = await axios.get("https://registry.npm.taobao.org/");
  child.commit("load.data", res.data);
});
export default child;
