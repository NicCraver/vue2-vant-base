<template>
  <div>
    <van-nav-bar
      title="VantList 示例"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="demo">
      <div class="btn">
        <van-button icon="plus" @click="test" type="primary" />
      </div>
      <van-list
        v-if="flag"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { NavBar, Button, List } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [List.name]: List
  },
  data() {
    return {
      flag: false,
      list: [],
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.flag = true;
    this.onLoad();
  },
  methods: {
    test() {
      this.flag = false;
      this.loading = false;
      this.finished = false;
      this.list = [];

      setTimeout(() => {
        this.flag = true;
        this.onLoad();
      }, 10);
    },
    onLoad() // :
    // _.throttle(function
    {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        console.log(` this.list`, this.list);
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    }
    // , 2000)
  }
};
</script>

<style lang="less" scoped>
.demo {
  padding: 0;
  background: #f7f8fa;
  height: calc(100vh - 46px);
  overflow-y: auto;
}
.btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 2500;
}
</style>
