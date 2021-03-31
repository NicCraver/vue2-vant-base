// 扫描所有的组件
// 组件名称必须首字母大写
// 组件内部必须有name属性
const files = require.context("./", true, /[A-Z]\w+\.(vue|js)$/);

const components = files.keys().map(key => {
  return files(key).default;
});

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
