<template>
  <div>
    <van-nav-bar
      title="ToDoList示例"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="demo"></div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
