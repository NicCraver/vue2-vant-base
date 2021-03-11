import { ChildVuex } from "super-vuex";

// 'sub'为命名空间
const sub = new ChildVuex("sub");
export default sub;

sub.setState({
  name: "evio",
  subs: [1, 2, 3, 4],
  isVip: false
});
