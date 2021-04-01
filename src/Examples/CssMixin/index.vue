<template>
  <div>
    <van-nav-bar
      title="CssMixin 示例"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="demo">
      <DocTitle docTitle="confirm 示例" />
      <DocTitle docTitle="debounce 示例" />
      <DocTitle docTitle="throttle 示例" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
