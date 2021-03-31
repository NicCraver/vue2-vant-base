<template>
  <div class="home">
    <header>
      <div class="home_title">
        <img src="../assets/logo.png" />
        <div class="home_title_text">Vue2-Vant-Base</div>
      </div>
      <DocTitle
        docTitle="基于vant封装的开箱即用框架"
        style="margin: 0 0 30px 25px;"
      />
    </header>
    <main class="home-nav">
      <DocTitle docTitle="基础示例" style="margin: 24px 0 8px 16px;" />
      <div class="home-nav_group">
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
        <van-cell
          title="ToDoList"
          is-link
          @click="GoToPage('/Examples/ToDoList')"
        />
        <van-cell title="Axios" is-link @click="GoToPage('/Examples/Axios')" />
        <van-cell
          title="Base Components"
          is-link
          @click="GoToPage('/Examples/BaseComponents')"
        />
        <van-cell
          title="Filters"
          is-link
          @click="GoToPage('/Examples/Filters')"
        />
        <van-cell
          title="Mixins"
          is-link
          @click="GoToPage('/Examples/Mixins')"
        />
        <van-cell
          title="Lodash"
          is-link
          @click="GoToPage('/Examples/Lodash')"
        />
        <van-cell
          title="Directives"
          is-link
          @click="GoToPage('/Examples/Directives')"
        />
        <van-cell title="404" is-link @click="GoToPage('123456789')" />
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
        <van-cell title="Vuex" is-link @click="GoToPage('/Examples/Vuex')" />
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
  .home-nav {
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
