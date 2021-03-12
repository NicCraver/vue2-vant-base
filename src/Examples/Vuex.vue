<template>
  <!-- 使用vuex的几种方式 -->
  <div>
    <h1>count: {{ count }}</h1>
    <van-button
      @click="setCount"
      style="width:100vw;margin: 5px 0;"
      type="primary"
    >
      mapActions
    </van-button>
    <van-button
      @click="SET_COUNT"
      style="width:100vw;margin: 5px 0;"
      type="primary"
    >
      mapMutations
    </van-button>
    <van-button
      @click="Action"
      style="width:100vw;margin: 5px 0;"
      type="primary"
    >
      Action
    </van-button>
    <van-button
      @click="Mutation"
      style="width:100vw;margin: 5px 0;"
      type="primary"
    >
      Mutation
    </van-button>
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
    }
  }
};
</script>
