<template>
  <div>
    <van-nav-bar title="Filters示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <DocTitle docTitle="身份证" />
      <p>{{ "110110200001010001" | formatId(true) }}</p>
      <p>{{ "110110200001010001" | formatId(false) }}</p>
      <DocTitle docTitle="手机号" />
      <p>{{ "18888888888" | formatTelehpone(true) }}</p>
      <p>{{ "18888888888" | formatTelehpone(false) }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
