<template>
  <section class="todolist">
    <header>
      <h1>ToDoList</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <input class="toggle-all" type="checkbox" v-model="allDone" />
      <ul class="todo-list">
        <li
          v-for="todo in todos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong> left
      </span>
      <button
        class="clear-completed"
        @click="removeCompleted"
        v-show="todos.length > remaining"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import storage from "./local";
export default {
  data() {
    return {
      newTodo: "",
      todos: this.$store.todo._state.todos,
      editedTodo: null
    };
  },
  created() {},
  mounted() {},
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach(todo => {
          todo.completed = value;
        });
      }
    }
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) return;
      console.log("addTodo", this.newTodo);
      this.newTodo = "";
      // 缓存里放一份
      // this.$store.todo.push("todos", {
      //   id: this.todos.length + 1,
      //   title: value,
      //   completed: false
      // });
      // console.log(
      //   "this.$store.todo",
      //   JSON.parse(JSON.stringify(this.$store.todo._state.todos))
      // );
    },
    doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
      storage.set(this.todos);
    },
    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    removeCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
      storage.set(this.todos);
    }
  },
  directives: {
    "todo-focus"(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
