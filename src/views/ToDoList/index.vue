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
            <input
              class="toggle"
              type="checkbox"
              v-model="todo.completed"
              @change="changeCompleted"
            />
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
      todos: this.$store.getters.todos,
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
    ...mapActions({ setTodo: "todo/setTodo" }),
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) return;
      this.todos.push({
        id: this.todos.length + 1,
        title: value,
        completed: false
      });
      this.newTodo = "";
      this.setTodo(this.todos);
    },
    changeCompleted() {
      this.setTodo(this.todos);
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      this.setTodo(this.todos);
    },
    editTodo: function(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
      this.setTodo(this.todos);
    },
    doneEdit(todo) {
      console.log("todo", todo);
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
      this.setTodo(this.todos);
    },
    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    removeCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
      this.setTodo(this.todos);
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
