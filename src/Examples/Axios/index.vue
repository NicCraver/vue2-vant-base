<template>
  <div>
    <van-nav-bar title="ToDoList示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <DocTitle>
        <template #title>
          <p>相关接口都在/src/apis/demo.js 中</p>
          <p>相关mock接口都 /mock/modules/demo.js 中</p>
        </template>
      </DocTitle>
      <!-- GTE -->
      <DocTitle docTitle="GTE & loading 示例" />
      <van-button @click="getFun" type="primary">
        GTE & loading
      </van-button>
      <!-- POST -->
      <DocTitle docTitle="POST示例" />
      <van-button @click="postFun" type="primary">
        POST
      </van-button>
      <!-- 上传示例 -->
      <DocTitle docTitle="上传示例" />
      <van-uploader v-model="fileList" :after-read="afterRead" />
      <!-- 登录失败示例 -->
      <DocTitle docTitle="登录失败示例" />
      <van-button @click="loginFailFun" type="primary">
        loginFail
      </van-button>
    </div>
  </div>
</template>

<script>
import {
  getDemoData,
  postDemoData,
  uploaderDemoData,
  loginFail
} from "@/apis/demo.js";
export default {
  data() {
    return {
      fileList: []
    };
  },
  mounted() {
    this.allLoadData();
  },
  methods: {
    async afterRead(file) {
      try {
        file.status = "uploading";
        file.message = "上传中...";
        let fd = new FormData();
        fd.append("token", 123456798);
        fd.append("name", "img");
        fd.append("avatar2", file.file);
        const res = await uploaderDemoData(fd);
        file.status = "done";
      } catch (error) {
        setTimeout(() => {
          file.status = "failed";
          file.message = "上传失败";
        }, 1000);
        console.error(`error`, error);
      }
    },
    async allLoadData() {
      try {
        const [get, post] = await Promise.all([getDemoData(), postDemoData()]);
        console.group("allLoadData");
        console.log(`get`, get);
        console.log(`post`, post);
        console.groupEnd();
      } catch (error) {
        console.error(`error`, error);
      }
    },
    async getFun() {
      this.$toast.loading("加载中...");
      try {
        const res = await getDemoData();
        console.log(`getFun`, res);
      } catch (error) {
        console.error(`error`, error);
      } finally {
        // 在有loading的情况下 使用该方法清空loading状态
        this.$toast.clear();
      }
    },
    async postFun() {
      try {
        const res = await postDemoData({ id: 42 });
        console.log(`postFun`, res);
      } catch (error) {
        console.error(`error`, error);
      }
    },
    async loginFailFun() {
      try {
        const res = await loginFail();
        console.log(`loginFailFun`, res);
      } catch (error) {
        console.error(`error`, error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
