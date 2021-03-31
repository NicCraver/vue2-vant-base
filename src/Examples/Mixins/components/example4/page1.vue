<template>
  <div>
    <h2>页面一</h2>
    <p>{{ content }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { myMixin } from "@/mixins/mixinsDemo.js";
export default {
  mixins: [myMixin],
  data() {
    return {
      content: "这是页面一的content!"
    };
  },
  computed: {
    count() {
      return 1000;
    }
  },
  mounted() {
    console.log("这是页面一的mounted!");
    this.getContent();
  },
  methods: {
    getContent() {
      console.log("这是页面一的getContent方法");
    }
  }
};
</script>
