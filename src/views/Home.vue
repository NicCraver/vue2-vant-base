<template>
  <div class="home">
    <header>
      <div class="home_title">
        <img src="../assets/logo.png" />
        <div class="home_title_text">Vue2-Vant-Base</div>
      </div>
      <div class="home_desc">
        基于vant封装的开箱即用框架
      </div>
    </header>
    <main class="home-nav">
      <div class="home-nav_title">基础示例</div>
      <div class="home-nav_group">
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
        <van-cell
          title="ToDoList"
          is-link
          @click="GoToPage('/Examples/ToDoList')"
        />
        <van-cell title="Axios" is-link @click="GoToPage('/Examples/Axios')" />
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    GoToPage(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
  .home_title {
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px;
    font-size: 32px;
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC",
      "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    img {
      width: 50px;
    }
    .home_title_text {
      margin-left: 10px;
    }
  }
  .home_desc {
    margin: 0 0 40px 25px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  .home-nav {
    .home-nav_title {
      margin: 24px 0 8px 16px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
    .home-nav_group {
      .van-cell {
        border-radius: 99px;
        background: #f7f8fa;
        margin: 0 0 12px;
        padding-left: 20px;
        font-size: 14px;
        transition: background 0.3s;
      }
      .van-cell::after {
        border-bottom: none !important;
      }
    }
  }
}
</style>
