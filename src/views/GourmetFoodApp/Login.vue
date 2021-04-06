<template>
  <div class="login">
    <header class="login_header">
      Sign In
    </header>
    <main class="login_main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
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
    margin-top: 114px;
    height: 223px;
    opacity: 1;
    background: #ffffff;
    border-radius: 0 22px 22px 0;
    // background: #fff;
  }
}
</style>
