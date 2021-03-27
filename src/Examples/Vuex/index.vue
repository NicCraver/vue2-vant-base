<template>
  <!-- 使用vuex的几种方式 -->
  <div>
    <van-nav-bar title="Vuex示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <h1>count: {{ count }}</h1>
      <div class="demo-doc-block_title m-10">
        1.mapGetters: 使用mapGetters获取vuex数据 前提是在/store/getters.js
        中配置好
      </div>
      <div class="demo-code">
        <p>computed:{</p>
        <p>// 使用对象展开运算符将 getter 混入 computed 对象中</p>
        <p>...mapGetters(["count"])</p>
        <p>}</p>
      </div>
      <div class="demo-doc-block_title m-10">
        2.使用...mapActions 调用方法
      </div>
      <van-button @click="setCount" type="primary">
        mapActions
      </van-button>
      <div class="demo-doc-block_title m-10">
        3.使用...mapMutations 调用方法
      </div>
      <van-button @click="SET_COUNT" type="primary">
        mapMutations
      </van-button>
      <div class="demo-doc-block_title m-10">
        4.使用dispatch 调用方法
      </div>
      <van-button @click="Action" type="primary">
        Action
      </van-button>
      <div class="demo-doc-block_title m-10">
        5.commit 调用方法
      </div>
      <van-button @click="Mutation" type="primary">
        Mutation
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions({ setCount: "app/setCount" }),
    ...mapMutations({ SET_COUNT: "app/SET_COUNT" }),
    Action() {
      // Action
      this.$store.dispatch("app/setCount");
    },
    Mutation() {
      this.$store.commit("app/SET_COUNT");
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
