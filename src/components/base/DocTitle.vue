<template>
  <div>
    <div class="demo-doc-block_title m-10">
      <slot name="title" v-if="docTitle === ''"></slot>
      <span v-else>{{ docTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocTitle",
  props: {
    docTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.demo-doc-block_title {
  margin: 0;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.m-10 {
  margin: 10px 0;
}
</style>
