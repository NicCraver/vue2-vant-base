<template>
  <div>
    <van-nav-bar title="ToDoList示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo"></div>
  </div>
</template>

<script>
import {
  getDemoData,
  postDemoData,
  putDemoData,
  delDemoData
} from "../../apis/demo";
export default {
  mounted() {
    this.$_loadData();
  },
  methods: {
    async $_loadData() {
      try {
        const [get, post, put, del] = await Promise.all([
          getDemoData(),
          postDemoData({ title: "foo", body: "bar", userId: 1 }),
          putDemoData({ title: "foo111", body: "bar", userId: 1 }),
          delDemoData()
        ]);
        console.group("res");
        console.log(`get`, get);
        console.log(`post`, post);
        console.log(`put`, put);
        console.log(`del`, del);
        console.groupEnd();
      } catch (error) {
        console.error(`error`, error);
      } finally {
        console.log(`finally`);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
