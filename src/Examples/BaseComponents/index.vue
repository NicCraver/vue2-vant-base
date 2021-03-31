<template>
  <div>
    <van-nav-bar title="Base组件示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <van-divider />
      <DocTitle>
        <template #title>
          <p>Base组件维护在 /src/components/base 中</p>
          <p>
            /src/components/index.js 中 将components文件夹下的组件注册到全局
          </p>
          <p>注意：1.组件名称必须首字母大写 2.组件内部必须有name属性</p>
        </template>
      </DocTitle>
      <van-divider />
      <DocTitle docTitle="HelloWorld" />
      <HelloWorld />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
