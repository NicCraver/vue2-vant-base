export default [
  {
    path: "/GourmetFood/Login",
    name: "Login",
    component: () => import("@/views/GourmetFoodApp/Login.vue"),
    meta: { title: "Login" }
  },
  {
    path: "/GourmetFood/SignUp",
    name: "SignUp",
    component: () => import("@/views/GourmetFoodApp/SignUp.vue"),
    meta: { title: "SignUp" }
  },
  {
    path: "/GourmetFood/Home",
    name: "GFHome",
    component: () => import("@/views/GourmetFoodApp/Home.vue"),
    meta: { title: "Home" }
  }
];
