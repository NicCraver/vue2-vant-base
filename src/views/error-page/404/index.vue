<template>
  <!-- https://www.iconfont.cn/search/index?searchType=illustration&q=404 -->
  <div>
    <van-nav-bar title="页面找不到了" left-arrow @click-left="$router.go(-1)" />
    <div class="img_404"><img src="@/assets/404.png" alt="" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.img_404 {
  img {
    width: 100vw;
  }
}
</style>
