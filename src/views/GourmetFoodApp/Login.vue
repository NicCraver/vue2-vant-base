<template>
  <div class="login">
    <header class="login_header">
      {{ pageTitle }}
    </header>
    <main class="login_main">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="Email" label="Email" />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          label="Password"
        />
        <div class="login_forgot">Forgot password?</div>
        <div class="btn">
          <van-button round block type="info" native-type="submit">
            {{ pageTitle }}
          </van-button>
        </div>
      </van-form>
    </main>
    <footer class="login_footer">
      <span>Already have an account?</span>
      <span class="m-l-20">Sign Un</span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 0 登录 1 注册
      pageStatus: 0,
      username: "",
      password: ""
    };
  },
  computed: {
    pageTitle() {
      return this.pageStatus === 0 ? "Sign In" : "Sign Up";
    }
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/FoodExample/Bitmap@2x.png") no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  position: relative;
  .login_header {
    padding-top: 120px;
    padding-left: 19px;
    color: #fff;
    opacity: 1;
    font-size: 34px;
    font-family: SFProDisplay-Bold;
    text-align: left;
    color: #ffffff;
    letter-spacing: 0px;
  }
  .login_main {
    width: 90%;
    box-sizing: border-box;
    margin-top: 114px;
    height: 185px;
    opacity: 1;
    background: #ffffff;
    border-radius: 0 22px 22px 0;
    padding: 20px 20px 20px 0;
    .login_forgot {
      font-size: 13px;
      font-family: SFProText-Medium;
      text-align: left;
      color: #b1b2b8;
      line-height: 18px;
      padding: 15px 0 10px 15px;
    }
    .btn {
      margin-top: 10px;
      width: 88%;
      .van-button {
        border-radius: 0 25px 25px 0;
      }
      .van-button--info {
        color: #fff;
        background-color: #fa7268;
        border: 1px solid #fa7268;
      }
      .van-button__content {
        display: flex;
        align-items: center;
        justify-content: left;
        font-size: 17px;
        font-family: SFProText-Semibold;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
        letter-spacing: 0px;
      }
    }
  }
  .login_footer {
    width: 100vw;
    position: absolute;
    bottom: 20px;
    color: #ffffff;
    text-align: center;
    font-size: 13px;
    font-family: SFProText-Medium;
    color: #ffffff;
    line-height: 18px;
  }
}
.m-l-20 {
  margin-left: 20px;
}
</style>
