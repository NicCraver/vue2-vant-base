import { ChildVuex } from "super-vuex";

// 'sub'为命名空间
const todo = new ChildVuex("todo");
export default todo;

todo.setState({
  todos: []
});
todo.setGetter("todo.todos", state => {
  return state.todos;
});
