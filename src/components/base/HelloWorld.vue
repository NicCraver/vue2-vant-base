<template>
  <div class="home_title">
    <img src="@/assets/logo.png" />
    <div class="home_title_text">Vue2-Vant-Base</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style lang="less" scoped>
.home_title {
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 16px;
  font-size: 32px;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  img {
    width: 50px;
  }
  .home_title_text {
    margin-left: 10px;
  }
}
</style>
