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
  mixins: [myMixin]
};
</script>

<style lang="less" scoped></style>
