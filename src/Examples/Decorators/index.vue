<template>
  <div>
    <van-nav-bar
      title="Decorators 装饰器 示例"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="demo">
      <DocTitle docTitle="confirm 示例" />
      <van-button type="primary" @click="handleUseConfirm">退出登录</van-button>
      <DocTitle docTitle="debounce 示例" />
      <van-button type="primary" @click="handleUseDebounce">
        Debounce
      </van-button>
      <DocTitle docTitle="throttle 示例" />
      <van-button type="primary" @click="handleUseThrottle">
        Throttle
      </van-button>
    </div>
    X
  </div>
</template>

<script>
import { confirm, throttle, debounce } from "@/decorators";
export default {
  methods: {
    @confirm("是否确认退出登录", "提示")
    handleUseConfirm() {
      console.log(`退出登录`);
    },
    @debounce(3000)
    handleUseDebounce() {
      console.log(`请求`);
    },
    @throttle(3000)
    handleUseThrottle() {
      console.log(`请求`);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
