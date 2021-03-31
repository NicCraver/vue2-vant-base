export const myMixin = {
  data() {
    return {
      content: "这是mixin的content!"
    };
  },
  methods: {
    setContent(val) {
      this.content = val;
    }
  },
  computed: {
    count() {
      return 0;
    }
  },
  mounted() {
    console.log("这是混入的mounted!");
  }
};
