<template>
  <div>
    <van-nav-bar
      title="Directives 示例"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="demo">
      <DocTitle docTitle="倒计时" />
      <span v-countdown="60000" formatter="HH小时mm分ss秒"></span>
      <DocTitle docTitle="水波纹" />
      <div v-ripple style="width: 150px;height: 80px;background: #458;"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
