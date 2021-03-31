<template>
  <div>
    <h2>页面 1</h2>
    {{ content }}
  </div>
</template>

<script>
import { myMixin } from "@/mixins/mixinsDemo.js";
export default {
  name: "page1",
  mixins: [myMixin],
  data() {
    return {
      content: "页面1 的 content"
    };
  },
  mounted() {
    console.log("这是页面一的mounted!");
  }
};
</script>

<style lang="less" scoped></style>
