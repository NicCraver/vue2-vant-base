// 将api 按功能划分 写在modules中  具体使用方法在Examples/Axios demo中
const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath);
  modules = value.default;
  return modules;
}, {});

export default { ...modules };
