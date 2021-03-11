<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="width:50px">421412</div>
    <ul>
      <li>421412</li>
      <li>421412</li>
      <li>421412</li>
      <li>421412</li>
    </ul>
  </div>
</template>

<script>
// import store from "@/store";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // store,
  components: {
    HelloWorld
  },
  mounted() {
    this.gets();
  },
  methods: {
    changeName() {
      // this.$store.user.commit("name", "someone");
      this.$store.user.commit("list", [
        { name: 1, path: 222 },
        { name: 1, path: 222 },
        { name: 1, path: 222 },
        { name: 1, path: 222 }
      ]);
      console.log("this.$store.user", this.$store.user._state);
    },
    changeAllow() {
      this.$store.user.commit("load.allow", false);
    },
    pushStudent() {
      this.$store.user.push("students", {
        name: "huaping",
        age: 300
      });
    },
    pushSubs() {
      this.$store.sub.push("subs", 10);
    },
    unshiftStudent() {
      this.$store.user.unshift("students", {
        name: "huaping1",
        age: 302
      });
    },
    deleteStudent() {
      this.$store.user.splice("students", 0, 1);
    },
    gets() {
      this.$store.user.dispatch("load.data.fetch");
      console.log("this.$store.user", this.$store.user._state);
    }
  }
};
</script>
