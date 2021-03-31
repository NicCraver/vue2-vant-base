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
      content: '页面1 的 content'
    }
  },
};
</script>

<style lang="less" scoped></style>
