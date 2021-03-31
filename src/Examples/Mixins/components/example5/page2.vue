<template>
  <div>
    <h2>页面 2</h2>
    <van-button type="primary">{{ content }}</van-button>
  </div>
</template>

<script>
import { myMixin } from "@/mixins/mixinsDemo.js";
export default {
  mixins: [myMixin],
  mounted() {
    this.setContent("页面二修改成功!");
  }
};
</script>

<style lang="less" scoped></style>
