export default [
  {
    path: "/Examples/Vuex",
    name: "Vuex",
    component: () => import("@/Examples/Vuex/index.vue"),
    meta: { title: "Vuex" }
  },
  {
    path: "/Examples/ToDoList",
    name: "ToDoList",
    component: () => import("@/Examples/ToDoList/index.vue"),
    meta: { title: "ToDoList" }
  },
  {
    path: "/Examples/Axios",
    name: "Axios",
    component: () => import("@/Examples/Axios/index.vue"),
    meta: { title: "Axios" }
  },
  {
    path: "/Examples/BaseComponents",
    name: "BaseComponents",
    component: () => import("@/Examples/BaseComponents/index.vue"),
    meta: { title: "Axios" }
  }
];
