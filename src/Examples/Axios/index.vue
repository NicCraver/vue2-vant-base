<template>
  <div>
    <van-nav-bar title="ToDoList示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <div class="demo-doc-block_title m-10">
        GTE & loading 示例
      </div>
      <van-button @click="getFun" type="primary">
        GTE & loading
      </van-button>
      <div class="demo-doc-block_title m-10">
        POST示例
      </div>
      <van-button @click="postFun" type="primary">
        POST
      </van-button>
      <div class="demo-doc-block_title m-10">
        PUT示例
      </div>
      <van-button @click="putFun" type="primary">
        PUT
      </van-button>
      <div class="demo-doc-block_title m-10">
        DEL示例
      </div>
      <van-button @click="delFun" type="primary">
        DEL
      </van-button>
      <div class="demo-doc-block_title m-10">
        上传示例
      </div>
      <van-uploader v-model="fileList" :after-read="afterRead" />
    </div>
  </div>
</template>

<script>
import {
  getDemoData,
  postDemoData,
  putDemoData,
  delDemoData,
  uploaderDemoData,
  getUser
} from "@/apis/demo";
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
        const [get, post, put, del] = await Promise.all([
          getDemoData(),
          postDemoData(),
          putDemoData({ title: "foo111", body: "bar", userId: 1 }),
          delDemoData()
        ]);
        console.group("res");
        console.log(`get`, get);
        console.log(`post`, post);
        console.log(`put`, put);
        console.log(`del`, del);
        console.groupEnd();
      } catch (error) {
        console.error(`error`, error);
      }
    },
    async getFun() {
      this.$toast.loading("加载中...");
      try {
        const res = await getUser();
        console.log(`res`, res);
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
        console.log(`res`, res);
      } catch (error) {
        console.error(`error`, error);
      }
    },
    async putFun() {
      try {
        const res = await putDemoData({
          title: "foo111",
          body: "bar",
          userId: 1
        });
        console.log(`res`, res);
      } catch (error) {
        console.error(`error`, error);
      }
    },
    async delFun() {
      try {
        const res = await delDemoData();
        console.log(`res`, res);
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
