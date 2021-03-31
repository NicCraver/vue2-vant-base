<template>
  <div>
    <van-nav-bar title="ToDoList示例" left-arrow @click-left="$router.go(-1)" />
    <van-tabs v-model="active">
      <van-tab title="示例 1">
        <div class="demo" v-if="active === 0">
          <DocTitle
            docTitle="一.混入
            混入 (mixin)提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。
            我的理解是:混入是能够提供公共的状态、方法、组件和自定义指令的集合.
            这样我们就能够在不同组件里面调用,并能够提升开发效率."
          />
          <DocTitle
            docTitle="二.局部混入
            局部混入:即只有引用了mixin的组件才能够使用.
            来看一个简单的例子.
            (注:mixin里面的代码不变,后面改变的是page1、page2的代码)"
          />
          <van-divider />
          <DocTitle docTitle="页面一、页面二的数据都是来自mixin" />
          <Example1Page1 />
          <Example1Page2 />
        </div>
      </van-tab>
      <van-tab title="示例 2">
        <div class="demo" v-if="active === 1">
          <DocTitle
            docTitle="当组件的数据和mixin的数据冲突的时候,以组件内部的数据为主."
          />
          <Example2Page1 />
        </div>
      </van-tab>
      <van-tab title="示例 3">
        <div class="demo" v-if="active === 2">
          <DocTitle
            docTitle="如果mixin和组件内部有相同的钩子函数.则这两个钩子函数会合并成一个数组,并且mixin对象的钩子函数先调用,组件内部的后调用."
          />
          <Example3Page1 />
          <DocTitle>
            <template #title>
              <p>//这是混入的mounted!</p>
              <p>//这是页面一的mounted!</p>
            </template>
          </DocTitle>
        </div>
      </van-tab>
      <van-tab title="示例 4">
        <div class="demo" v-if="active === 3">
          <DocTitle
            docTitle="如果混入对象和组件内部的methods、components、directives冲突时,以组件内部的为准."
          />
          <Example4Page1 />
          <DocTitle>
            <template #title>
              <p>
                //注意：mixins中components return的是0 页面 1中return的是1000
              </p>
              <p>//这是混入的mounted!</p>
              <p>//这是页面一的mounted!</p>
              <p>//这是页面一的getContent方法!</p>
            </template>
          </DocTitle>
        </div>
      </van-tab>
      <van-tab title="实例">
        <div class="demo" v-if="active === 4">
          <DocTitle
            docTitle="现在有一个需求:在不同页面根据不同的内容显示不同的按钮文字."
          />
          <Example5Page1 />
          <Example5Page2 />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Example1Page1 from "./components/example1/page1";
import Example1Page2 from "./components/example1/page2";
import Example2Page1 from "./components/example2/page1";
import Example3Page1 from "./components/example3/page1";
import Example4Page1 from "./components/example4/page1";
import Example5Page1 from "./components/example5/page1";
import Example5Page2 from "./components/example5/page2";
export default {
  components: {
    Example1Page1,
    Example1Page2,
    Example2Page1,
    Example3Page1,
    Example4Page1,
    Example5Page1,
    Example5Page2
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
