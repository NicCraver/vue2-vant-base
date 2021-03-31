<template>
  <div>
    <van-nav-bar title="Lodash 示例" left-arrow @click-left="$router.go(-1)" />
    <div class="demo">
      <DocTitle
        docTitle="debounce （函数去抖） 多次触发，只在最后一次触发时，执行目标函数。"
      />
      <van-button type="primary" @click="debounce()">debounce</van-button>
      <DocTitle
        docTitle="throttle （函数节流）限制目标函数调用的频率，比如：1s内不能调用2次。"
      />
      <van-button type="primary" @click="throttle()">throttle</van-button>
      <van-divider />
      <DocTitle docTitle="1. cloneDeep() 深克隆对象" />
      <van-button type="primary" @click="cloneDeep()">cloneDeep</van-button>
      <DocTitle docTitle="2.  获取对象数组中某一同名属性的属性值集合" />
      <van-button type="primary" @click="map()">map</van-button>
      <DocTitle docTitle="3.  获取对象数组中某一属性值最大的对象" />
      <van-button type="primary" @click="maxBy()">maxBy</van-button>
      <DocTitle docTitle="4.  找出两个数组中元素值相同的元素" />
      <van-button type="primary" @click="intersection()"
        >intersection</van-button
      >
      <DocTitle docTitle="5.  求数值数组中元素值的平均数" />
      <van-button type="primary" @click="mean()">mean</van-button>
      <DocTitle docTitle="6.  求对象数组中某个属性值的平均数" />
      <van-button type="primary" @click="meanBy()">meanBy</van-button>
      <DocTitle docTitle="7.  获取数组中前n个元素，不改变原数组" />
      <van-button type="primary" @click="take()">take</van-button>
      <DocTitle docTitle="8.  删除数组中值为falsy的元素" />
      <van-button type="primary" @click="compact()">compact</van-button>
      <DocTitle docTitle="9.  去重" />
      <van-button type="primary" @click="uniq()">uniq</van-button>
      <DocTitle
        docTitle="10.  排序。对象数组，根据对象中的某个属性的值，升序或降序排序"
      />
      <van-button type="primary" @click="orderBy()">orderBy</van-button>
      <DocTitle docTitle="11.  判断对象中是否有某个属性" />
      <van-button type="primary" @click="has()">has</van-button>
      <DocTitle docTitle="12.  获取对象中的某个属性的值" />
      <van-button type="primary" @click="get()">get</van-button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  methods: {
    test: _.debounce(function() {
      console.log(
        "debounce （函数去抖） 多次触发，只在最后一次触发时，执行目标函数。"
      );
    }, 1000),
    test2: _.throttle(function() {
      console.log(
        "throttle （函数节流）限制目标函数调用的频率，比如：1s内不能调用2次。"
      );
    }, 3000),
    debounce() {
      this.search();
    },
    throttle() {
      this.search2();
    },
    cloneDeep() {
      let objA = { name: "brown" };
      //JS深克隆
      JSON.parse(JSON.stringify(objA));
      // Lodash的方法
      let objB = _.cloneDeep(objA);
      console.log(objA); //{name: "brown"}
      console.log(objB); //{name: "brown"}
      console.log(objA === objB); //false
    },
    map() {
      let users = [
        {
          id: 12,
          name: "Adam",
          hobbies: [
            { name: "running", index: 100 },
            { name: "cycling", index: 95 }
          ]
        },
        {
          id: 14,
          name: "Bob",
          hobbies: [
            { name: "movie", index: 98 },
            { name: "music", index: 85 }
          ]
        },
        {
          id: 16,
          name: "Charlie",
          hobbies: [
            { name: "travelling", index: 90 },
            { name: "fishing", index: 88 }
          ]
        },
        {
          id: 18,
          name: "David",
          hobbies: [
            { name: "walking", index: 99 },
            { name: "football", index: 85 }
          ]
        }
      ];
      console.log(_.map(users, "id"));
      console.log(_.map(users, "hobbies[0].name"));
      console.log(_.map(users, "hobbies[0]"));
    },
    maxBy() {
      let arr = [
        { a: 1, b: 22, c: { d: 4 } },
        { a: 2, c: { d: 6 } },
        { a: 3, b: 4, c: { d: 6 } }
      ];
      let maxBObj = _.maxBy(arr, "b");
      console.log(maxBObj); // {a: 3, b: 4, c: {d: 6}}
    },
    intersection() {
      let arr1 = [2, 1, { a: 1, b: 2 }];
      let arr2 = [2, 1, { a: 1, b: 2 }];
      let intersection = _.intersection(arr1, arr2);

      console.log(intersection); // [2]
    },
    mean() {
      let numbers = [1, 2, 3, 4, 5];
      let average = _.mean(numbers);

      console.log(average); // 3
    },
    meanBy() {
      let objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
      let average = _.meanBy(objects, "n");

      console.log(average); // 5
    },
    take() {
      let arr = [1, 2, 3, 4, 5];
      let part1Arr = _.take(arr, 4);
      let part2Arr = _.take(arr, 6);
      let part3Arr = _.take([], 5);

      console.log(part1Arr); // [1, 2, 3, 4]
      console.log(part2Arr); // [1, 2, 3, 4, 5]
      console.log(part3Arr); // []
    },
    compact() {
      let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
      let truthyArr = _.compact(arr);

      console.log(truthyArr); // [1, 2, 3]
    },
    uniq() {
      let arr = [2, 1, 2, "2", true];
      let uniqArr = _.uniq(arr);

      console.log(uniqArr); // [2, 1, '2', true]
    },
    orderBy() {
      let users = [
        { user: "Tom", age: 25 },
        { user: "Amy", age: 23 },
        { user: "Perter", age: 22 },
        { user: "Ben", age: 29 }
      ];
      let sortedUsers = _.orderBy(users, "age", "desc");

      console.log(sortedUsers);
      // [{user: "Ben", age: 29}, {user: "Tom", age: 25}, {user: "Amy", age: 23}, {user: "Perter", age: 22}]
    },
    has() {
      let obj = { a: [{ b: { c: 3 } }] };
      let hasC = _.has(obj, "a[0].b.c");

      console.log(hasC); // true
    },
    get() {
      let obj = { a: [{ b: { c: 3 } }] };
      let c = _.get(obj, "a[0].b.c");

      console.log(c); // 3
    }
  }
};
</script>

<style lang="less" scoped>
@import "../demo.less";
</style>
